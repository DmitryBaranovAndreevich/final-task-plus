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
  if (!("owner" in req.body && "content" in req.body && "avatar" in req.body))
    throw new InCorrectDataError();
  const { avatar, content, owner } = req.body;
  Feedback.find()
    .then(async (res) => {
      const feedback = res.find((el) => el.owner === owner);
      if (feedback) {
        await Feedback.findByIdAndRemove(feedback._id);
      }
      return Feedback.create({
        owner: owner,
        content: content,
        image: avatar,
      });
    })
    .then((feed) => Feedback.find({}))
    .then((feeds) => {
      console.log(feeds);
      res.send(feeds);
    })
    .catch(next);
};
