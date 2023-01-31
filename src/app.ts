import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { check } from 'express-validator';
import userRouter from './routes/user';
import { createUser, login } from './controllers/users';
import auth from './middlewares/auth';
import errorHandler from './helpers/errorhandler';

const {
  PORT = 3001,
  MONGOOSE = 'mongodb+srv://administrator:96b-Rur-whx-Biv@cluster0.c7n1eme.mongodb.net/final-task?retryWrites=true&w=majority',
} = process.env;

const app = express();

app.use(cookieParser());
app.use(express.json());
mongoose.connect(MONGOOSE);

app.post(
  '/signin',
  [
    check('email', 'Введенная почта не соответствует типу email').isEmail(),
    check('password', 'Длинна пароля должна быть больше 2 символов').isLength({ min: 2 }),
  ],
  login,
);
app.post(
  '/signup',
  [
    check('email', 'Введенная почта не соответствует типу email').isEmail(),
    check('password', 'Длинна пароля должна быть больше 2 символов').isLength({ min: 2 }),
  ],
  createUser,
);

// app.use(auth);
app.use('/users', auth, userRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
