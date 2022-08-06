const {
  getAllLaunches,
  addNewLaunche,
} = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunche(req, res) {
  const clientLauncheData = req.body;

  if (
    !clientLauncheData.mission ||
    !clientLauncheData.rocket ||
    !clientLauncheData.target ||
    !clientLauncheData.launchDate
  ) {
    return res.status(400).json({
      error: "Missing launch data",
    });
  }
  clientLauncheData.launchDate = new Date(clientLauncheData.launchDate);
  if (clientLauncheData.launchDate.toString() === "Invalid Date") {
    return res.status(400).json({
      error: "Invalid Date",
    });
  }

  const newLaunche = addNewLaunche(clientLauncheData);
  return res.status(201).json(newLaunche);
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunche,
};
