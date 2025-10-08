import { model, models, Schema } from "mongoose";

export interface IImage extends Document {
  _id:string;
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: string;
  width: Number;
  height: Number;
  config: Object;
  transformationUrl: string;
  aspectRatio: string;
  color: string;
  prompt: string;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const imageSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    transformationType: {
      type: String,
      required: true,
    },
    publicId: {
      type: String,
      required: true,
    },
    secureUrl: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    config: {
      type: Object,
    },
    transformationUrl: {
      type: String,
    },
    aspectRatio: {
      type: String,
    },
    color: {
      type: String,
    },
    prompt: {
      type: String,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Image = models?.Image || model("Image", imageSchema);

export default Image;
