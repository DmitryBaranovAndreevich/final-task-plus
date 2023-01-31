import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import InCorrectPassword from '../errors/incorrectPassword';

const { JWT_SECRET = 'dev-key' } = process.env;

export default (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) throw new InCorrectPassword();
  const token = authorization.split(' ')[1];
  let payload;
  try {
    payload = jwt.verify(token as string, JWT_SECRET);
  } catch (err) {
    throw new InCorrectPassword();
  }

  req.user = payload;

  next();
};
