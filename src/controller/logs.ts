import { getLogs, createLog, getLogByDate, getLogById } from "../db/logs";
import express from "express";

export const getAllLogs = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    let logs = await getLogs();

    if (!logs) {
      return res.status(400);
    }

    return res.status(200).json(logs).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};
