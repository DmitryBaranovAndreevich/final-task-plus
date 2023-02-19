import dotenv from "dotenv";
import IMailObj from "interfaces/mailObj";
import { Error } from "mongoose";
import nodemailer from "nodemailer";
import path from "path";

const sendEmail = async (mailObj: IMailObj) => {
  const { to, subject, text } = mailObj;

  try {
    const transporter = nodemailer.createTransport(
      {
        host: "smtp.mail.ru",
        port: 465,
        secure: true,
        auth: {
          user: "final.task@mail.ru",
          pass: "KGa0RKtSi81yHQ1QhdTm", //KGa0RKtSi81yHQ1QhdTm
        },
      },
      {
        from: '<final.task@mail.ru>',
      }
    );

    const info = await transporter.sendMail({
      from: "final.task@mail.ru",
      to: to,
      subject: subject,
      text: text,
      html: `<div style="text-align: center;">
  <h1 style="color: #3584c8;">Team of creative Front-Back Developers</h1>
  <p>
   Our team sends you greetings and wishes you all the best
    <br />
    🤗 🤗 🤗 🤗 🤗 🤗
  </p>
</div>`,
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
