import { getVideoInfo } from "./services/video.service";

import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/video-info/:videoId", (req: Request, res: Response) => {
  let videoId = req.params["videoId"];

  // console.log(videoUrl)

  getVideoInfo(videoId).then((videoInfo) => res.send(videoInfo.videoDetails));
});

app.listen(port, () => {
  console.log(`Server rodando na porta: ${port}`);
});
