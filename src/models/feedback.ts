import { Schema, model } from "mongoose";
import IFeedback from "../interfaces/feedback";

const feedbackShema = new Schema<IFeedback>({
  owner: {
    type: String,
    required: true,
  },

  image: {
    type: String,
  },

  content: {
    type: String,
    required: true,
  },
});

export default model<IFeedback>("feedback", feedbackShema);
