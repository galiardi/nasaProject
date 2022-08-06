const express = require("express");

const { httpGetAllLaunches } = require("./launches.controllers");

const launchesRouter = express.Router();
launchesRouter.get("/", httpGetAllLaunches);

module.exports = launchesRouter;
