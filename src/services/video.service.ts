import * as fs from "fs";
import ytdl, { videoInfo } from "ytdl-core";
import { youtube } from "../constantes";

export const downloadVideo = (videoId: string): videoInfo => {
  
  const downloadUrl = `${youtube.BASE_URL}=${videoId}`;
    let returnedVideoInfo!: videoInfo;
  
  
  getVideoInfo(downloadUrl).then((videoInfo: videoInfo) => {
    let titulo = videoInfo.videoDetails.title;

    ytdl(`${youtube.BASE_URL}=${videoId}`).pipe(
      fs.createWriteStream(
        `..\\${youtube.DIRETORIO_OUTPUT}\\video_${titulo}.mp4`
      )
    );
    returnedVideoInfo = videoInfo;
  });
  
  return returnedVideoInfo;
};

export const getVideoInfo = (downloadUrl: string) => {
  console.log(`Buscando informações do video: ${downloadUrl}`);
  return ytdl.getBasicInfo(downloadUrl);
};
