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
    let stat: number = 0;
    fetch("https://api.brevo.com/v3/contacts", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": <string>process.env["PUBLIC_KEY"],
      },
      body: JSON.stringify({ email: req.params.email, listIds: [4] }),
      method: "POST",
    })
      .then((resp) => {
        if (resp.ok) {
          fetch;
        }
        return resp;
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
    if (stat === 0) {
      return res.status(400);
    } else {
      return res.status(200);
    }
  }
});

// Exports

export default addRouter;
