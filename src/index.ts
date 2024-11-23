import { getVideoInfo } from "./services/video.service";

import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  getVideoInfo().then((videoInfo) => res.send(videoInfo.videoDetails));
});

app.listen(port, () => {
  console.log(`Server rodando na porta: ${port}`);
});
