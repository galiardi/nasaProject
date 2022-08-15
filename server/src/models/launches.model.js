const launchesDatabase = require("./launches.mongo");
const planetsDatabase = require("./planets.mongo");

const DEFAULT_FLIGTH_NUMBER = 100;

const launch = {
  flightNumber: 100,
  mission: "Pablito",
  rocket: "rocket 1",
  target: "Kepler-442 b",
  customers: ["customer 1"],
  launchDate: new Date("December 21, 2023"),
  upcoming: true,
  success: true,
};

saveLaunch(launch);

async function getLatestFligthNumber() {
  const latestLaunch = await launchesDatabase.findOne().sort("-flightNumber");

  if (!latestLaunch) {
    return DEFAULT_FLIGTH_NUMBER;
  }

  return latestLaunch.flightNumber;
}

async function saveLaunch(launch) {
  const planet = await planetsDatabase.findOne({
    keplerName: launch.target,
  });
  if (!planet) {
    throw new Error("No matching planet found");
  }

  return await launchesDatabase.updateOne(
    {
      flightNumber: launch.flightNumber,
    },
    launch,
    { upsert: true }
  );
}

async function getAllLaunches() {
  return await launchesDatabase.find(
    {},
    {
      _id: 0,
      __v: 0,
    }
  );
}

async function addNewLaunch(launch) {
  const newflightNumber = (await getLatestFligthNumber()) + 1;
  const newLaunch = Object.assign({}, launch, {
    flightNumber: newflightNumber,
    success: true,
    upcoming: true,
    customers: ["NASA"],
  });
  const databaseResponse = await saveLaunch(newLaunch);
  console.log(databaseResponse);
  return newLaunch;
}

function abortLaunchById(launchId) {
  const aborted = launches.get(launchId);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
  abortLaunchById,
};
