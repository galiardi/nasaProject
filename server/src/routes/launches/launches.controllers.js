const {
  getAllLaunches,
  addNewLaunche,
} = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunche(req, res) {
  const clientLauncheData = req.body;
  const newLaunche = addNewLaunche(clientLauncheData);
  return res.status(201).json(newLaunche);
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunche,
};
