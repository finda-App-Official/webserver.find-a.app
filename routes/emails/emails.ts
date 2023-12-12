// Imports

import Express from "express";

// Presets

const emailsRouter = Express.Router();

// API-Imports

import addRouter from "./addContact";

// Code

emailsRouter.use("/add", addRouter);

// Exports

export default emailsRouter;
