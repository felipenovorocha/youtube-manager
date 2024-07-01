import * as fs from "fs";
import ytdl from "ytdl-core";
import { youtube } from "./constantes";

let videoIds = ["2i_DLZDe4DA"];

let downloadUrl = `${youtube.BASE_URL}=${videoIds[0]}`;

export const downloadVideo = (title: string) => {
  ytdl(downloadUrl).pipe(
    fs.createWriteStream(`../${youtube.DIRETORIO_OUTPUT}/${title}.mp4`)
  );
  console.log(`Download do video ${title} realizado com sucesso`);
};

export const getVideoInfo = () => {
  return ytdl.getBasicInfo(downloadUrl);
};
