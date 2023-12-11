// Imports

import Express, { response } from "express";
import SibApiV3Sdk from "sib-api-v3-typescript";
import dotenv from "dotenv";

// Presets

let env = dotenv.config();
const addRouter = Express.Router();

// Code

addRouter.post("/?type=:type/?email=:email", (req, res) => {
  if (req.params.type === "sponsors") {
  } else if (req.params.type === "public") {
    fetch("https://api.brevo.com/v3/contacts", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": String(process.env["PUBLIC_KEY"]),
      },
      body: JSON.stringify({ email: req.params.email }),
      method: "POST",
    })
      .then((response) => {
        if (response.ok) {
          return response;
        }
      })
      .then((response) => {
        return res.status(200);
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  }
});

// Exports

export default addRouter;
