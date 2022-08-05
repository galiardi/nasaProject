const express = require("express");

const { getPlanets } = require("./planets.controllers");

const planetsRouter = express.Router();
planetsRouter.use(express.json());
planetsRouter.get("/", getPlanets);

module.exports = planetsRouter;
