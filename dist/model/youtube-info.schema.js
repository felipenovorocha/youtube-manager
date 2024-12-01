"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoInfoModel = exports.VideoInfo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class VideoInfo {
}
exports.VideoInfo = VideoInfo;
const VideoInfoSchema = new mongoose_1.default.Schema({
    title: { type: String },
    nomeCanal: { type: String },
    createdAt: Date,
    descricao: { type: String },
    id: { type: String },
});
exports.VideoInfoModel = mongoose_1.default.model("VideoInfo", VideoInfoSchema);
//# sourceMappingURL=youtube-info.schema.js.map