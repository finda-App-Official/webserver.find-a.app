// Imports

import express from "express";

import { getAllLogs } from "../controller/logs";

export default (router: express.Router) => {
  router.get("/logs/all", getAllLogs);
};
