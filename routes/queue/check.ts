// Imports

import Express from "express";
import { Job, LogEvent } from "../../apiTypes";
import fs from "fs-extra";
import dotenv from "dotenv";
import validate from "../validate";

// Presets

const checkRouter = Express.Router();
const pending: Job[] = fs.readJsonSync("data/queue.json").pending;
const logs: LogEvent[] = fs.readJsonSync("data/logs.json").events;
let env = dotenv.config();

// Code

checkRouter.get("/", (req, res) => {
  if (
    validate(String(req.headers["user"]), String(req.headers["authorization"]))
  ) {
    logs.push({
      type: "checked",
      user: {
        name: String(req.headers["user"]),
      },
      date: new Date(),
    });
    fs.writeJsonSync("data/logs.json", logs, { spaces: 4 });
    if (pending.length > 0) {
      return res.status(201);
    } else {
      return res.status(404);
    }
  } else {
    return res.status(401);
  }
});

// Exports

export default checkRouter;
