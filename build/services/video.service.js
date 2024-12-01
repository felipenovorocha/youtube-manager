"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVideoInfo = exports.downloadVideo = void 0;
const ytdl_core_1 = __importDefault(require("ytdl-core"));
const constantes_1 = require("../constantes");
let downloadUrl = `${constantes_1.youtube.BASE_URL}=`;
const downloadVideo = () => {
    //   let tituloTratado = title.replace(" ", "-").replace("\g:","").toLowerCase();
    // let videoInfo = getVideoInfo.;
    // ytdl(downloadUrl).pipe(
    //   fs.createWriteStream(
    //     `..\\${youtube.DIRETORIO_OUTPUT}\\video_${videoIds[0]}.mp4`
    //   )
    // );
    // console.log(`Download do video ${title} realizado com sucesso`);
};
exports.downloadVideo = downloadVideo;
const getVideoInfo = (id) => {
    let formatedDownloadUrl = `${downloadUrl}${id}`;
    console.log(`recuperando informações do video: ${formatedDownloadUrl}`);
    return ytdl_core_1.default.getBasicInfo(formatedDownloadUrl);
};
exports.getVideoInfo = getVideoInfo;
