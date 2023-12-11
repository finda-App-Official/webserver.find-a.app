// Imports

import { env } from "process";
import Express from "express";
import path from "path";
import cors from "cors";

// Presets

const app = Express();

// Configs

app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());
app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "PATCH"],
    origin: "*",
  })
);
app.listen(2000, () => {
  console.log("Server running on port 2000");
});

// API-Imports

import apiRouter from "./routes/api";

// Code

app.use("/api", apiRouter);
