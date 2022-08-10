const {
  getAllLaunches,
  addNewLaunche,
  existsLaunchWithId,
  abortLaunchById,
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
      error: "Invalid date",
    });
  }

  const newLaunche = addNewLaunche(clientLauncheData);
  return res.status(201).json(newLaunche);
}

function httpAbortLaunche(req, res) {
  const launchId = Number(req.params.id);
  if (!existsLaunchWithId(launchId)) {
    return res.status(404).json({
      error: "Launch not found.",
    });
  }

  const aborted = abortLaunchById(launchId);
  return res.status(200).json(aborted);
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunche,
  httpAbortLaunche,
};
