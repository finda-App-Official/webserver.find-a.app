import { getLogs, createLog, getLogByDate, getLogById } from "../db/logs";
import express from "express";

export const createL = async (req: express.Request, res: express.Response) => {
  try {
    const { type } = req.body;

    if (!type) {
      return res.sendStatus(400);
    }

    const log = await createLog({
      type,
      date: new Date(),
    });

    return res.status(200).json(log).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};
export const getLById = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const log = await getLogById(id);

    return res.json(log).status(200).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};
export const getLByDate = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { date } = req.body;

    const log = await getLogByDate(date);

    return res.json(log).status(200).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};
