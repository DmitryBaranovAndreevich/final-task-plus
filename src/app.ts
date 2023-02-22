import express from "express";
import mongoose, { Error } from "mongoose";
import cookieParser from "cookie-parser";
import { check } from "express-validator";
import userRouter from "./routes/user";
import { createUser, login } from "./controllers/users";
import auth from "./middlewares/auth";
import errorHandler from "./helpers/errorhandler";
import feedbackRouter from "./routes/feedback";
import cors from 'cors';
import { senMail } from "./controllers/sendMail";
import fs from "fs";
import https from "https";
const {
  PORT = 3001,
  MONGOOSE = "mongodb+srv://administrator:96b-Rur-whx-Biv@cluster0.c7n1eme.mongodb.net/final-task?retryWrites=true&w=majority",
} = process.env;
const privateKey = fs.readFileSync("./privkey.pem");
const certificate = fs.readFileSync("./fullchain.pem");
const credentials = { key: privateKey, cert: certificate };

const app = express();
app.use(
  cors({
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionsSuccessStatus: 200
  })
);
app.use(cookieParser());
app.use(express.json());
mongoose.connect(MONGOOSE);
app.post(
  "/signin",
  [
    check("email", "Введенная почта не соответствует типу email").isEmail(),
    check("password", "Длинна пароля должна быть больше 2 символов").isLength({
      min: 2,
    }),
  ],
  login
);
app.post(
  "/signup",
  [
    check("email", "Введенная почта не соответствует типу email").isEmail(),
    check("password", "Длинна пароля должна быть больше 2 символов").isLength({
      min: 2,
    }),
  ],
  createUser
);

app.post("/sendmail", senMail);

app.use("/feedbacks", feedbackRouter);

// app.use(auth);
app.use("/users", userRouter);

app.use(errorHandler);


const httpsServer = https.createServer(credentials, app);

httpsServer.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
