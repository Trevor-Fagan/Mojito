const server = require("../index");
const request = require("supertest");

describe("Database tests", () => {
  it("should get an object from the database", async () => {
    const res = await request(server).get("/backend/budget");
    expect(res.status).toEqual(200);
    // expect the response to be an object
    expect(typeof res.body).toEqual("object");
  });
});
