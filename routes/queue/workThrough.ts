// Imports

import Express from "express";
import { Job, LogEvent } from "../../apiTypes";
import fs from "fs-extra";
import validate from "../validate";

// Presets

const workRouter = Express.Router();
const queue: any = fs.readJson("data/queue.json");
const pending: Job[] = fs.readJsonSync("data/queue.json").pending;
const logs: LogEvent[] = fs.readJsonSync("data/logs.json").events;

// Code

workRouter.get("/", (req, res) => {
  if (
    validate(String(req.headers["user"]), String(req.headers["authorization"]))
  ) {
    if (queue.left > 0) {
      pending.forEach((job) => {
        if (job.type === "public") {
          if (job.message.type === "welcome") {
          } else if (job.message.type === "canceled") {
          } else if (job.message.type === "normal") {
            let sender = job.creator.name;
          }
        }
      });
    } else {
      return res.status(201);
    }
  } else {
    return res.status(401);
  }
});

// Exports

export default workRouter;
