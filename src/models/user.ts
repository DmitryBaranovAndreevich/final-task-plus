import { Schema, model } from 'mongoose';
import validator from 'validator';
import IUser from '../interfaces/user';

const userShema = new Schema<IUser>({
  name: {
    type: String,
    minlength: 2,
    required: true,
  },
  image: {
    type: String
  },
  password: {
    type: String,
    minlength: 2,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v: string) => validator.isEmail(v),
      message: "Некорректный адрес почты",
    },
  },
});

export default model<IUser>('user', userShema);
