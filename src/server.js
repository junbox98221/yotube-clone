/* 
기존에는 
const express = require("express");
이렇게 해야 했지만 babel을 사용해서 최신 js코드로 
작성이 가능하다
 */
import express from "express";

const PORT = 4000;

const app = express();

const handleListening = () => console.log(`Server listening on port ${PORT}`);

app.listen(4000, handleListening);
