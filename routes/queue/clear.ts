// Imports

import Express from "express";
import { Job, LogEvent } from "../../apiTypes";
import fs from "fs-extra";
import validate from "../validate";

// Presets

const clearRouter = Express.Router();
const queue: any = fs.readJson("data/queue.json");
const pending: Job[] = fs.readJsonSync("data/queue.json").pending;
const logs: LogEvent[] = fs.readJsonSync("data/logs.json").events;

// Code

clearRouter.delete("/", (req, res) => {
  if (
    validate(String(req.headers["user"]), String(req.headers["authorization"]))
  ) {
    logs.push({
      type: "cleared",
      user: {
        name: String(req.headers["user"]),
      },
      date: new Date(),
    });
    fs.writeJsonSync("data/logs.json", { events: logs }, { spaces: 4 });
    pending.slice(0, pending.length);
    queue.pending = pending;
    fs.writeJsonSync("data/queue.json", queue, { spaces: 4 });
    return res.status(201);
  }
});

// Exports

export default clearRouter;
