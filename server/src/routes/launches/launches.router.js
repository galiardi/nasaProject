const express = require("express");

const { getAllLaunches } = require("./launches.controllers");

const launchesRouter = express.Router();
launchesRouter.get("/", getAllLaunches);

module.exports = launchesRouter;
