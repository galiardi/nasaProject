const express = require("express");

const { httpGetAllPlanets } = require("./planets.controllers");

const planetsRouter = express.Router();
planetsRouter.use(express.json());
planetsRouter.get("/", httpGetAllPlanets);

module.exports = planetsRouter;
