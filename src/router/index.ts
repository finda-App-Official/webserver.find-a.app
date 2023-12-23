// Imports

import express from "express";

// Project-Imports

import contacts from "./contacts";
import email from "./emails";

// Constants

const router = express.Router();

// Routes

export default (): express.Router => {
  contacts(router);
  email(router);
  return router;
};
