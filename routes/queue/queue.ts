// Imports

import Express from "express";

// Presets

const queueRouter = Express.Router();

// API-Imports

import checkRouter from "./check";
import clearRouter from "./clear";
import { workRouter } from "./workThrough";
import { createRouter } from "./createJob";

// Code

queueRouter.use("/check", checkRouter);
queueRouter.use("/clear", clearRouter);
queueRouter.use("/work", workRouter);
queueRouter.use("/create", createRouter);

// Exports

export default queueRouter;
