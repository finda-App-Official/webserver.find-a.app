import { getContacts } from "../db/newsletter";
import { getSponsors } from "../db/sponsors";
import express from "express";
import { transporter } from "../index";

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

    (await getSponsors()).forEach(async (contact) => {
      await transporter
        .sendMail({
          from: '"finda Newsletter" <news@find-a.app>',
          to: contact.email,
          subject: `${title}`,
          html: html + `\n\n erstellt von ${author}`,
        })
        .catch((err) => console.log(err));
      sendTo.push(contact.email);
    });

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

    (await getContacts()).forEach(async (contact) => {
      await transporter
        .sendMail({
          from: '"finda Newsletter" <news@find-a.app>',
          to: contact.email,
          subject: `${title}`,
          html: html + `\n\n erstellt von ${author}`,
        })
        .catch((err) => console.log(err));
      sendTo.push(contact.email);
    });

    return res.status(200).json({ sendTo: sendTo }).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};
