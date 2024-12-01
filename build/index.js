"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const video_service_1 = require("./services/video.service");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get("/", (req, res) => {
    (0, video_service_1.getVideoInfo)().then((videoInfo) => res.send(videoInfo.videoDetails));
});
app.listen(port, () => {
    console.log(`Server rodando na porta: ${port}`);
});
