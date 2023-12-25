import { getContacts } from "../db/newsletter";
import { getSponsors } from "../db/sponsors";
import express from "express";

export const sendMailToSponsors = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { title, html, author } = req.body;

    if (!title || !html || !author) {
      return res.sendStatus(400);
    }

    let sendTo: string[] = [];

    return res.status(200).json({ sendTo: sendTo }).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};
export const sendMailToNewsletter = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { title, html, author } = req.body;

    if (!title || !html || !author) {
      return res.sendStatus(400);
    }

    let sendTo: string[] = [];

    return res.status(200).json({ sendTo: sendTo }).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(500).json(error).end();
  }
};
