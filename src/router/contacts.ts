// Imports

import express from "express";

import { addC, deleteC } from "../controller/contacts";

export default (router: express.Router) => {
  router.post("/contacts/add", addC);
  router.delete("/contacts/delete/id=:id", deleteC);
};
