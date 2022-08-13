const http = require("http");
const mongoose = require("mongoose");

const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 7500;

MONGO_URL =
  "mongodb+srv://nasa-api:QvB7FYZr9e88I75p@nasaproject.netrotv.mongodb.net/?retryWrites=true&w=majority";

const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("MongoDB connected..");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

async function startServer() {
  await loadPlanetsData();
  await mongoose.connect(MONGO_URL);

  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
  });
}

startServer();
