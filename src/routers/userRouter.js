import express from "express";
import {
  postEdit,
  getEdit,
  logout,
  see,
} from "../controllers/userController.js";
import { protectorMiddleware } from "../middlewares.js";

const userRouter = express.Router();
userRouter.get("/logout", protectorMiddleware, logout);
userRouter.route("/edit").all().get(getEdit).post(postEdit);
userRouter.get("/:id", see);

export default userRouter;
