// Imports

const { env } = require("process");
const Express = require("express");
const path = require("path");
const cors = require("cors");

// Presets

const app = Express();

// Configs

app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());
app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "PATCH"],
    origin: "https://*.find-a.app/*",
  })
);
app.listen(2000, () => {
  console.log("Server running on port 2000");
});

// API-Imports

const apiRouter = require("./routes/api");

// Code

app.use("/api", apiRouter);
