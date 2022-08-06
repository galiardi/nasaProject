const launches = new Map();

let flightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "mission 1",
  rocket: "rocket 1",
  target: "planet 1",
  customers: ["customer 1"],
  launchDate: new Date("December 21, 2023"),
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunche(clientLauncheData) {
  flightNumber++;

  clientLauncheData.launchDate = new Date(clientLauncheData.launchDate);

  const newLaunche = Object.assign({}, clientLauncheData, {
    flightNumber,
    customers: ["NASA"],
    upcoming: true,
    success: true,
  });

  launches.set(flightNumber, newLaunche);

  return newLaunche;
}

module.exports = {
  getAllLaunches,
  addNewLaunche,
};
