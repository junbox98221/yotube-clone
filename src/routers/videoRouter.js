import express from "express";
import { watch, getEdit, postEdit } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch); //정규표현식 활용. 정수가 아닌 id는 받지 않는다!!
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit); //미쳤네 이건 존나 간단해

export default videoRouter;
