// Imports

import Express from "express";

// Presets

const queueRouter = Express.Router();

// API-Imports

import checkRouter from "./check";
import clearRouter from "./clear";

// Code

queueRouter.use("/check", checkRouter);
queueRouter.use("/clear", clearRouter);

// Exports

export default queueRouter;
