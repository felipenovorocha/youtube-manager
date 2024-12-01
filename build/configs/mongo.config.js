"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDB = void 0;
const mongoose_1 = require("mongoose");
const MONGO_DB_URI = "mongodb+srv://felipe-rocha:NEmwbuDpNmYtm3PH@pessoal.oehwf.mongodb.net/";
// MONGO_DB_URI="YOUR_MONGODB_URL"
// NODE_ENV=development
// PORT=5000 
// connection to db
const connectToDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, mongoose_1.set)('strictQuery', false);
        const db = yield (0, mongoose_1.connect)(MONGO_DB_URI);
        console.log('MongoDB connected to', db.connection.name);
        // Emit an event when the connection is successful
    }
    catch (error) {
        console.error(error);
        // Emit an event when there's an error
    }
});
exports.connectToDB = connectToDB;
