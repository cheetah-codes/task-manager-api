const express = require("express");
const { router } = require("./routes/tasks");
const { connectDB } = require("./db/connect");
require("dotenv").config()

// import express from "express"
// import { router } from "./routes/tasks.js";
// import { connectDB } from "./db/connect.js";
// import {config} from "dotenv"
// config()

const app = express();
const port = 3000;

//middleware
app.use(express.static("./public"))

app.use(express.json());

//routes

app.use("/api/v1/tasks", router);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`successfully connected to server on port ${port}...`);
    });
  } catch (err) {
    console.error("Database connection error:", err);
  }
};

start();


// console.log(process.env.MONGO_URI);

