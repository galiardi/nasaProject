const http = require("http");
const { loadPlanetsData } = require("./models/planets.model");

const app = require("./app");

const PORT = process.env.PORT || 7500;

const server = http.createServer(app);

async function startServer() {
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
  });
}

startServer();