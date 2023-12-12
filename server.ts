// Imports

import { env } from "process";
import Express from "express";
import path from "path";
import cors from "cors";
import fs from "fs-extra";

// Presets

const app = Express();
const pending: Job[] = fs.readJsonSync("data/queue.json").pending;

// Configs

app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());
app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "PATCH"],
    origin: "*",
  })
);
app.listen(2000, () => {
  console.log("Server running on port 2000");
  setInterval(() => {
    if (pending.length > 0) {
      workThrough();
    }
  }, 1);
});

// API-Imports

import apiRouter from "./routes/api";
import { workThrough } from "./routes/queue/workThrough";
import { Job } from "./apiTypes";

// Code

// app.use("/api", apiRouter);
