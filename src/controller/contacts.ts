import {
  createContact,
  deleteContact,
  getContactByMail,
} from "../db/newsletter";
import express from "express";

export const addC = async (req: express.Request, res: express.Response) => {
  try {
    const { email, first_name, last_name } = req.body;

    if (!email) {
      return res.sendStatus(400);
    }

    const existingContact = await getContactByMail(email);

    if (existingContact) {
      return res.sendStatus(400);
    }

    const contact = await createContact({
      email,
      info: {
        first_name,
        last_name,
      },
    });

    return res.status(200).json(contact).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};
export const deleteC = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const deletedContact = await deleteContact(id);

    return res.json(deletedContact).status(200).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(500).json(error).end();
  }
};
