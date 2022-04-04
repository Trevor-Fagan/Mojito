const server = require("../index");
const request = require("supertest");

describe("hitting /backend/budget endpoint", () => {
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

describe("hitting /backend/user endpoint", () => {
  it("should get an object from the database", async () => {
    const res = await request(server).get("/backend/user");
    expect(res.status).toEqual(200);
    console.log(res.body);
    // expect the response to be an object
    expect(typeof res.body).toEqual("object");
  });

  it("Get values from the database", async () => {
    const res = await request(server).get("/backend/user");
    expect(res.status).toEqual(200);
    expect(res.body.Id).toEqual("123456789");
    expect(res.body.LastName).toEqual("Fagan");
    expect(res.body.FirstName).toEqual("Trevor");
    expect(res.body.Email).toEqual("trevorfagan77@gmail.com");
  });
});

describe("POST /api/info endpoint", () => {
  it("should return a 200 response", async () => {
    const res = await request(server).post("/api/info");
    // console.log(res.body);
    expect(res.body.item_id).toEqual(null);
    expect(res.body.access_token).toEqual(null);
    expect(typeof res.body.products).toEqual("object");
    expect(res.status).toEqual(200);
  });
});

describe("POST /api/create_link_token", () => {
  it("Check types for response body", async () => {
    const res = await request(server).post("/api/create_link_token");
    console.log(res.body);
    expect(typeof res.body.expiration).toEqual("string");
    expect(typeof res.body.link_token).toEqual("string");
    expect(typeof res.body.request_id).toEqual("string");
    expect(res.status).toEqual(200);
  });
});
