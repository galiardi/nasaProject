const express = require("express");

const {
  httpGetAllLaunches,
  httpAddNewLaunche,
  httpAbortLaunche,
} = require("./launches.controllers");

const launchesRouter = express.Router();

launchesRouter.get("/", httpGetAllLaunches);
launchesRouter.post("/", httpAddNewLaunche);
launchesRouter.delete("/:id", httpAbortLaunche);

module.exports = launchesRouter;
