import * as fs from "fs";
import { youtube } from "./constantes";
import { downloadVideo, getVideoInfo } from "./services/video.service";
import { criarDiretorioOutput } from "./services/generic.service";

import express, { Request, Response } from "express";
import { json } from "stream/consumers";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  let title;
  getVideoInfo().then((videoInfo) => res.send(videoInfo.videoDetails));
});

app.listen(port, () => {
  console.log(`Server rodando na porta: ${port}`);
});
