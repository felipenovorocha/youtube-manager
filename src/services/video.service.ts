import * as fs from "fs";
import ytdl from "ytdl-core";
import { youtube } from "../constantes";

let videoIds = ["2i_DLZDe4DA"];

let downloadUrl = `${youtube.BASE_URL}=`;

export const construirDownloadUrl =  (videoId: string) => {};

export const downloadVideo = (title: string) => {
  //   let tituloTratado = title.replace(" ", "-").replace("\g:","").toLowerCase();

  ytdl(downloadUrl).pipe(
    fs.createWriteStream(
      `..\\${youtube.DIRETORIO_OUTPUT}\\video_${videoIds[0]}.mp4`
    )
  );
  console.log(`Download do video ${title} realizado com sucesso`);
};

export const getVideoInfo = () => {
  console.log(`recuperando informações do video: ${downloadUrl}`);
  return ytdl.getBasicInfo(downloadUrl);
};
