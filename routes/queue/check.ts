// Imports

import Express from "express";
import Job from "../../apiTypes";
import fs from "fs-extra";

// Presets

const checkRouter = Express.Router();
const pending: Job[] = fs.readJsonSync("data/queue.json").pending;
const done: Job[] = fs.readJsonSync("data/queue.json").done;

// Code

checkRouter.get("/", (req, res) => {
  if (pending.length > 0) {
    return res.status(201);
  } else {
    return res.status(404);
  }
});

// Exports

export default checkRouter;
