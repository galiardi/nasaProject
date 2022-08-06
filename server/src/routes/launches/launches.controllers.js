const {
  getAllLaunches,
  addNewLaunche,
} = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunche(req, res) {
  const newLaunche = req.body;
  return res.status(201).json(addNewLaunche(newLaunche));
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunche,
};
