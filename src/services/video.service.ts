import ytdl from "ytdl-core";
import { youtube } from "../constantes";
import { VideoInfoModel } from "../model/youtube-info.schema";

let downloadUrl = `${youtube.BASE_URL}=`;

export const downloadVideo = () => {
  //   let tituloTratado = title.replace(" ", "-").replace("\g:","").toLowerCase();
  // let videoInfo = getVideoInfo;
  // ytdl(downloadUrl).pipe(
  //   fs.createWriteStream(
  //     `..\\${youtube.DIRETORIO_OUTPUT}\\video_${videoIds[0]}.mp4`
  //   )
  // );
  // console.log(`Download do video ${title} realizado com sucesso`);
};

export const getVideoInfo = (id: string) => {
  let formatedDownloadUrl = `${downloadUrl}${id}`;
  console.log(`recuperando informações do video: ${formatedDownloadUrl}`);

  ytdl.getBasicInfo(formatedDownloadUrl).then((videoInfo) => {
    const videoInfoDB = new VideoInfoModel();

    videoInfoDB.title = videoInfo.videoDetails.title;
    videoInfoDB.descricao = videoInfo.videoDetails.description;
    videoInfoDB.urlCanal = videoInfo.videoDetails.ownerChannelName;
    videoInfoDB.id = id;

    videoInfoDB.save();
  });
  return ytdl.getBasicInfo(formatedDownloadUrl);
};
