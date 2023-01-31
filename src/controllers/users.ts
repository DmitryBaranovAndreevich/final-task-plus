import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import InCorrectDataError from "../errors/incrrectDataError";
import { Request, Response, NextFunction } from "express";
import User from "../models/user";
import IUser from "../interfaces/user";
import EmailDuplicate from "../errors/emailDuplicate";
import NotFoundError from "../errors/notFoundError";
import InCorrectPassword from "../errors/incorrectPassword";
import { validationResult } from "express-validator";

const { JWT_SECRET = "dev-key" } = process.env;

export const getUsers = (req: Request, res: Response, next: NextFunction) => {
  User.find({})
    .then((users) => res.send(users))
    .catch(next);
};

export const getUser = (req: Request, res: Response, next: NextFunction) => {
   const error = validationResult(req);
   console.log(error)
  if (!error.isEmpty())
    return res.status(400).json({ messge: "Некорректный URL", error });
  const { userId } = req.params;
  User.findById(userId)
    .orFail(new NotFoundError("Нет пользователя с таким ID"))
    .then((user) => res.send(user))
    .catch(next);
};

export const login = (req: Request, res: Response, next: NextFunction) => {
  const error = validationResult(req);
  if (!error.isEmpty())
    return res.status(400).json({ messge: "Ошибка при регистрации", error });
  const { email, password } = req.body;
  return User.findOne({ email })
    .select("+password")
    .orFail(new NotFoundError("Нет пользователя с таким email"))
    .then((user) =>
      bcrypt.compare(password, user.password).then((matched) => {
        if (!matched) throw new InCorrectPassword();
        const token = jwt.sign({ _id: user._id }, JWT_SECRET, {
          expiresIn: "2h",
        });
        res.send({ token }).end();
      })
    )
    .catch(next);
};

export const createUser = (req: Request, res: Response, next: NextFunction) => {
  const error = validationResult(req);
  if (!error.isEmpty())
    return res.status(400).json({ messge: "Ошибка при регистрации", error });
  if (!("email" in req.body && "password" in req.body))
    throw new InCorrectDataError();

  const { password, ...any } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash: string) => User.create({ ...any, password: hash }))
    .then((user: IUser) => {
      if (!user) throw new Error("NotValidData");
      res.send(user);
    })
    .catch((err: { message: string; code: number }) => {
      if (err.code === 11000) next(new EmailDuplicate());
      if (err.message === "NotValidData") next(new InCorrectDataError());
      else next(new Error());
    });
};
