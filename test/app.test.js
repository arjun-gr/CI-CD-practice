import request from "supertest";
import app from "../index.js";

describe("GET /", () => {
  it("should return message", async () => {
    const res = await request(app).get("/");
    expect(res.body.message).toBe("CI/CD is working!");
  });
});
