const server = require("../index");
const request = require("supertest");

describe("Database tests", () => {
  it("should get an object from the database", async () => {
    const res = await request(server).get("/backend/budget");
    expect(res.status).toEqual(200);
    console.log(res.body);
    // expect the response to be an object
    expect(typeof res.body).toEqual("object");
  });

  it("Get values from the database", async () => {
    const res = await request(server).get("/backend/budget");
    expect(res.status).toEqual(200);
    // console.log(res.body);
    expect(res.body.Id).toEqual("123456789");
    expect(res.body.Housing).toEqual(800);
    expect(res.body.Entertainment).toEqual(49);
    expect(res.body.Vacation).toEqual(1200);
    expect(res.body.Car).toEqual(500);
    expect(res.body.Clothing).toEqual(100);
    expect(res.body.Misc).toEqual(49);
  });
});
