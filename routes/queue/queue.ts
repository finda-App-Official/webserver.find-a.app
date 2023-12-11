// Imports

import Express from "express";

// Presets

const queueRouter = Express.Router();

// API-Imports

import checkRouter from "./check";

// Code

queueRouter.use("/check", checkRouter);

// Exports

export default queueRouter;
