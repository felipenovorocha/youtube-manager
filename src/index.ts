import { connectToDB } from "./configs/mongo.config";
import { getVideoInfo } from "./services/video.service";

import express, { Request, Response } from "express";
import * as dotenv from "dotenv";

const app = express();
const port = 3000;



connectToDB();

app.get("/video-info/:videoId", (req: Request, res: Response) => {
  let videoId = req.params["videoId"];
  getVideoInfo(videoId).then((videoInfo) => res.send(videoInfo.videoDetails));
});

app.listen(port, () => {
  console.log(`Server rodando na porta: ${port}`);
});
