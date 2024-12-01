import { timeStamp } from "console";
import mongoose, { Collection } from "mongoose";

export class VideoInfo {
  title!: string;
  id!: string;
}

const VideoInfoSchema = new mongoose.Schema({
  title: { type: String },
  nomeCanal: { type: String },
  createdAt: Date,
  descricao: { type: String },
  id: { type: String },
});

export const VideoInfoModel = mongoose.model("VideoInfo", VideoInfoSchema);
