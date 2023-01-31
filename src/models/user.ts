import IUser from "../interfaces/user";
import { Schema, model } from "mongoose";
import validator from "validator";

const userShema = new Schema<IUser>({
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

export default model("user", userShema);
