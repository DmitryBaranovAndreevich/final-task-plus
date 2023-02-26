import IMailObj from "../interfaces/mailObj";
import { Error } from "mongoose";
import nodemailer from "nodemailer";
import htmlTemplate from "./html";

const sendEmail = async (mailObj: IMailObj) => {
  const { to } = mailObj;

  try {
    const transporter = nodemailer.createTransport(
      {
        host: "smtp.mail.ru",
        port: 465,
        secure: true,
        auth: {
          user: "final.task@mail.ru",
          pass: "nLwiDtPaPZ210ZaAxNdW", //ueIpTrO*Ot23
        },
      },
      {
        from: "<final.task@mail.ru>",
      }
    );

    const info = await transporter.sendMail({
      from: "final.task@mail.ru",
      to: to,
      subject: "Letter from RS Clone",
      text: "Our team sends you greetings and wishes you all the best",
      html: htmlTemplate,
    });
    console.log(`Message sent: ${info.messageId}`);
    return `Message sent: ${info.messageId}`;
  } catch (error: any) {
    console.error(error);
    throw new Error(
      `Something went wrong in the sendmail method. Error: ${error.message}`
    );
  }
};

export default sendEmail;
