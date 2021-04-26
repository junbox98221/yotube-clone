import express from "express";
import { see, edit, deleteVideo, upload } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", see); //정규표현식 활용. 정수가 아닌 id는 받지 않는다!!
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/deleteVideo", deleteVideo);

export default videoRouter;
