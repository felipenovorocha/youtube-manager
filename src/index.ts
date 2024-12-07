import { downloadVideo, getVideoInfo } from "./services/video.service";

import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/video-info/:id", (req: Request, res: Response) => {
  try {
    getVideoInfo(req.params.id).then((videoInfo) =>
      res.send(videoInfo.videoDetails)
    );
  } catch (error) {
    console.log(error);
  }
});
app.get("/video-download/:id", (req: Request, res: Response) => {
  try {
    downloadVideo(req.params.id);
    res.send("Download realizado com sucesso")
    
  } catch (error) {
    res.send("Download não foi realizado")
  }
});

app.listen(port, () => {
  console.log(`Server rodando na porta: ${port}`);
});
