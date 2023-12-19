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
  console.log("1");
  if (
    validate(String(req.headers["user"]), String(req.headers["authorization"]))
  ) {
    console.log("2");
    if (pending.length > 0) {
      console.log("4");
      logs.push({
        type: "checked",
        user: {
          name: String(req.headers["user"]),
        },
        date: new Date(),
      });
      fs.writeJsonSync("data/logs.json", { events: logs }, { spaces: 4 });
      console.log("Hallo");
      res.status(201);
    } else {
      console.log("5");
      res.status(404);
    }
  } else {
    res.status(401);
    console.log("3");
  }
});

// Exports

export default checkRouter;
