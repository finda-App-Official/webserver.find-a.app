// Imports

import Express from "express";

// Presets

const apiRouter = Express.Router();

// API-Imports

import queueRouter from "./queue/queue";
import emailsRouter from "./emails/emails";

// Code

apiRouter.use("/queue", queueRouter);
apiRouter.use("/emails", emailsRouter);

// Exports

export default (): Express.Router => {
  return apiRouter;
};
