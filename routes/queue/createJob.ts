// Imports

import Express from "express";
import { Job, LogEvent } from "../../apiTypes";
import fs from "fs-extra";
import validate from "../validate";

// Presets

const createRouter = Express.Router();
const queue: any = fs.readJson("data/queue.json");
const pending: Job[] = fs.readJsonSync("data/queue.json").pending;
const done: Job[] = fs.readJsonSync("data/queue.json").done;
const logs: LogEvent[] = fs.readJsonSync("data/logs.json").events;

// Code

function createJob(
  type: string | "public" | "sponsors",
  creator: { name: string; email: string },
  user: { email: string },
  message: {
    type: "welcome" | "normal" | "canceled";
    content: {
      title: string;
      details: string;
    };
  }
) {
  let newJob: Job = {
    type: type,
    message: message,
    user: user,
    creator: creator,
    createdAt: new Date(),
    finishedAt: undefined,
  };
  pending.push(newJob);
  queue.pending = pending;
  fs.writeJsonSync("data/queue.json", queue, { spaces: 4 });
  return true;
}
createRouter.post("/type=:type", (req, res) => {
  let object = req.body;
  let type = "";
  if (req.params.type === "public") {
    type = "public";
  } else if (req.params.type === "sponsors") {
    type = "sponsors";
  } else {
    return res.status(400);
  }
  createJob(type, object.creator, object.user, object.message);
});

// Exports

export { createJob, createRouter };
