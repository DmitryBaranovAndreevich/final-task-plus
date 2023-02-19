import { Request, Response, NextFunction } from "express";
import sendEmail from "../helpers/send-mail";

export const senMail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await sendEmail(req.body);
    res.send({
      payload: result,
    });
  } catch (error) {
    next(error);
  }
};
