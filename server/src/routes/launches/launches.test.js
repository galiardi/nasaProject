const request = require("supertest");
const app = require("../../app");

describe("Test Get /launches", () => {
  test("It should respond with 200 success", async () => {
    await request(app)
      .get("/launches")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("Test Post /launches", () => {
  const completeLaunchData = {
    mission: "Test mission",
    rocket: "Test rocket",
    target: "Test planet",
    launchDate: "December 1, 2022",
  };

  const incompleteLaunchData = {
    mission: "Test mission incomplete",
    rocket: "Test rocket incomplete",
    target: "Test planet incomplete",
  };

  const launchDataWithInvalidDate = {
    mission: "Test mission invalid date",
    rocket: "Test rocket invalid date",
    target: "Test target invalid date",
    launchDate: "hola",
  };

  test("It should respond with 201 created", async () => {
    const response = await request(app)
      .post("/launches")
      .send(completeLaunchData)
      .expect("Content-Type", /json/)
      .expect(201);

    const requestLaunchDate = new Date(completeLaunchData.launchDate);
    const responseLaunchDate = new Date(response.body.launchDate);
    expect(responseLaunchDate.valueOf()).toBe(requestLaunchDate.valueOf());
  });

  test("It should catch missing required properties", async () => {
    const response = await request(app)
      .post("/launches")
      .send(incompleteLaunchData)
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: "Missing launch data",
    });
  });

  test("It should catch invalid dates", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchDataWithInvalidDate)
      .expect("Content-Type", /json/)
      .expect(400);
    expect(response.body).toStrictEqual({
      error: "Invalid date",
    });
  });
});
