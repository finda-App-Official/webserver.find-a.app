// Imports

import Express from "express";

// Presets

const apiRouter = Express.Router();

// API-Imports

import queueRouter from "./queue/queue";

// Code

apiRouter.use("/queue", queueRouter);

// Exports

export default apiRouter;
