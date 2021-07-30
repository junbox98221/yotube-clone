import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch); //정규표현식 활용. 정수가 아닌 id는 받지 않는다!!
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;
