import * as fs from "fs";
import ytdl, { videoInfo } from "ytdl-core";
import { youtube } from "../constantes";

let downloadUrl = `${youtube.BASE_URL}=`;

export const downloadVideo = () => {
  //   let tituloTratado = title.replace(" ", "-").replace("\g:","").toLowerCase();
  // let videoInfo = getVideoInfo.;
  // ytdl(downloadUrl).pipe(
  //   fs.createWriteStream(
  //     `..\\${youtube.DIRETORIO_OUTPUT}\\video_${videoIds[0]}.mp4`
  //   )
  // );
  // console.log(`Download do video ${title} realizado com sucesso`);
};

export const getVideoInfo = (id: string): Promise<videoInfo> => {
  let formatedDownloadUrl = `${downloadUrl}${id}`;
  console.log(`recuperando informações do video: ${formatedDownloadUrl}`);
  return ytdl.getBasicInfo(formatedDownloadUrl);
};
