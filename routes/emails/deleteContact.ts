// Imports

import Express from "express";
import dotenv from "dotenv";

// Presets

let env = dotenv.config();
const deleteRouter = Express.Router();

// Code

deleteRouter.delete("/email=:email", async (req, res) => {
  let email = encodeURI(req.params.email);
  let fetchReq = await fetch(`https://api.brevo.com/v3/contacts/${email}`, {
    headers: {
      Accept: "application/json",
      "api-key": <string>process.env["PUBLIC_KEY"],
    },
    method: "DELETE",
  })
    .then((fetchRes) => {
      return fetchRes;
    })
    .then((data) => {
      if (data.status === 204) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      return false;
    });
  if (fetchReq) {
    res.status(201);
  } else {
    res.status(500);
  }
});

// Exports

export default deleteRouter;
