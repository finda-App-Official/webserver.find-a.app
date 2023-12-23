// Imports

import express from "express";

// Project-Imports

import { sendMailToNewsletter, sendMailToSponsors } from "../controller/emails";

// Code

export default (router: express.Router) => {
  router.post("/newsletter/sponsors", sendMailToSponsors);
  router.post("/newsletter/", sendMailToNewsletter);
};
