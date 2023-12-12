// Imports

import Express from "express";
import { Job, LogEvent } from "../../apiTypes";
import fs from "fs-extra";
import validate from "../validate";

// Presets

const workRouter = Express.Router();
const queue: any = fs.readJson("data/queue.json");
const pending: Job[] = fs.readJsonSync("data/queue.json").pending;
const done: Job[] = fs.readJsonSync("data/queue.json").done;
const logs: LogEvent[] = fs.readJsonSync("data/logs.json").events;

// Code
async function workThrough() {
  for (let i = 0; i < pending.length; i++) {
    if (queue > 0) {
      let job = pending[i];
      if (job.type === "public") {
        if (job.message.type === "welcome") {
        } else if (job.message.type === "canceled") {
        } else if (job.message.type === "normal") {
          let sender = job.creator.name;
          let fetchReq = await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
              accept: "application/json",
              "api-key": <string>process.env["PUBLIC_KEY"],
              "content-type": "application/json",
            },
            body: JSON.stringify({
              sender: {
                name: "finda Newsletter",
                email: "news@find-a.app",
              },
              to: [
                {
                  email: job.user,
                },
              ],
              htmlContent:
                "<!DOCTYPE html> <html> <body> <h1>Confirm you email</h1> <p>Please confirm your email address by clicking on the link below</p> </body> </html>",
            }),
          })
            .then((fetchRes) => {
              return fetchRes;
            })
            .then((data) => {
              if (data.status === 201) {
                return true;
              } else {
                return false;
              }
            });
          if (!!fetchReq) {
            pending.slice(pending.indexOf(job));
            job.finishedAt = new Date();
            done.push(job);
            queue.left--;
          } else {
            return false;
          }
        }
      }
    } else {
      return false;
    }
    queue.pending = pending;
    queue.done = done;
    fs.writeJsonSync("data/queue.json", queue, { spaces: 4 });
  }
}

workRouter.get("/", async (req, res) => {
  if (
    validate(String(req.headers["user"]), String(req.headers["authorization"]))
  ) {
    if (await workThrough()) {
      return res.status(201);
    } else {
      return res.status(500);
    }
  } else {
    return res.status(401);
  }
});

// Exports

export { workRouter, workThrough };
