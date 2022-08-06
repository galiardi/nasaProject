const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: "mission 1",
  rocket: "rocket 1",
  destination: "planet 1",
  customer: ["customer 1"],
  launchDate: new Date("December 21, 2023"),
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

module.exports = {
  getAllLaunches,
};
