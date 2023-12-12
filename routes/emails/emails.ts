// Imports

import Express from "express";

// Presets

const emailsRouter = Express.Router();

// API-Imports

import addRouter from "./addContact";
import deleteRouter from "./deleteContact";

// Code

emailsRouter.use("/add", addRouter);
emailsRouter.use("/delete", deleteRouter);

// Exports

export default emailsRouter;
