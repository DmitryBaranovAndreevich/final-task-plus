import InCorrectDataError from "../errors/incrrectDataError";
import NotFoundError from "../errors/notFoundError";
import { Request, Response, NextFunction } from "express";
import Feedback from "../models/feedback";
import User from "../models/user";
import IUser from "../interfaces/user";

export const getFeedbacks = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  Feedback.find({})
    .then((feedbacks) => res.send(feedbacks))
    .catch(next);
};

export const createFeedbacks = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!("email" in req.body && "content" in req.body))
    throw new InCorrectDataError();
  const { email, content } = req.body;
  User.findOne({ email })
    .orFail(new NotFoundError("Нет пользователя с таким ID"))
    .then((user: IUser) => user._id)
    .then((_id) => Feedback.create({owner: _id , content: content}))
    .then(feed => res.send(feed))
    .catch(next)
};
