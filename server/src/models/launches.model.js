const launches = new Map();

let flightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "mission 1",
  rocket: "rocket 1",
  destination: "planet 1",
  customers: ["customer 1"],
  launchDate: new Date("December 21, 2023"),
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunche(newLaunche) {
  flightNumber++,
    launches.set(
      flightNumber,
      Object.assign(newLaunche, {
        flightNumber,
        customers: ["NASA"],
        launchDate: new Date(newLaunche.launchDate),
        upcoming: true,
        success: true,
      })
    );
  return launches.get(flightNumber);
}

module.exports = {
  getAllLaunches,
  addNewLaunche,
};
