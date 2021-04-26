/* 
기존에는 
const express = require("express");
이렇게 해야 했지만 babel을 사용해서 최신 js코드로 
작성이 가능하다
+
패키지의 경우 node_modules/express로 하지 않고
express만 해도 알아서 찾아준다. 굿
 */
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter.js";
import userRouter from "./routers/userRouter.js";
import videoRouter from "./routers/videoRouter.js";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () => {
  console.log(`Server listening on port ${PORT} 🚀`);
};

app.listen(4000, handleListening);
