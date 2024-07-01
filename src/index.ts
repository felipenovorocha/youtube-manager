import ytdl from "ytdl-core";
import * as fs from "fs";
import * as cd from "child_process";
import { youtube } from "./constantes";
import { url } from "inspector";
import { downloadVideo, getVideoInfo } from "./video.service";



const criarDiretorioOutput = () => {
  cd.execSync(`mkdir ${youtube.DIRETORIO_OUTPUT}`, { cwd: ".." });
};



const init = () => {
  if (!fs.existsSync(`../${youtube.DIRETORIO_OUTPUT}`)) {
    console.log("criando diretorio... ");
    criarDiretorioOutput();
  }

  getVideoInfo().then((videoInfo) => {
    let title = videoInfo.videoDetails.title;
    console.log(`baixando o video ${title}`), downloadVideo(title);
  });
};

init();
