"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVideoInfo = exports.downloadVideo = exports.construirDownloadUrl = void 0;
const fs = __importStar(require("fs"));
const ytdl_core_1 = __importDefault(require("ytdl-core"));
const constantes_1 = require("../constantes");
let videoIds = ["2i_DLZDe4DA"];
let downloadUrl = `${constantes_1.youtube.BASE_URL}=`;
const construirDownloadUrl = (videoId) => { };
exports.construirDownloadUrl = construirDownloadUrl;
const downloadVideo = (title) => {
    //   let tituloTratado = title.replace(" ", "-").replace("\g:","").toLowerCase();
    (0, ytdl_core_1.default)(downloadUrl).pipe(fs.createWriteStream(`..\\${constantes_1.youtube.DIRETORIO_OUTPUT}\\video_${videoIds[0]}.mp4`));
    console.log(`Download do video ${title} realizado com sucesso`);
};
exports.downloadVideo = downloadVideo;
const getVideoInfo = () => {
    console.log(`recuperando informações do video: ${downloadUrl}`);
    return ytdl_core_1.default.getBasicInfo(downloadUrl);
};
exports.getVideoInfo = getVideoInfo;
