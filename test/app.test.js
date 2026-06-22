import request from "supertest";
import app from "../index.js";
import { describe, it, expect } from "vitest";

describe("GET /", () => {
  it("should return message", async () => {
    const res = await request(app).get("/");
    expect(res.body.message).toBe("CI/CD is working!");
  });
});
