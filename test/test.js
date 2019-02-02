import nock from "nock";
import express from "express";
import chai from "chai";
import chaiHttp from "chai-http";
import dotenv from "dotenv";

chai.use(chaiHttp);
const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env'
dotenv.config({ path: envFile });
console.log(process.env.JWT_SECRET)

import routes from "../routes";

const api = express();
api.use(routes);

describe("Article controller", () => {
  before(async () => {
    console.log("Initialisation des mocks");
  });

  describe("login - bad", () => {
    it("login bad credentials", async () => {
      let response = await chai
        .request(api)
        .post(`/api/v1/login`)
        .send({ email: "t", password: "t" });
      chai.expect(response).to.have.status(401);
    });
  });
  describe("login - pass", () => {
    it("login good credentials", async () => {
      let response = await chai
        .request(api)
        .post(`/api/v1/login`)
        .send({ email: "toto", password: "toto" });
      chai.expect(response).to.have.status(200);
    });
  });

  describe("test nock", () => {
    it("should return false result", async () => {
      const license = {
        key: "toto",
        name: "MIT toto",
        spdx_id: "MIT",
        url: "https://api.github.com/licenses/mit",
        node_id: "MDc6TGljZW5zZTEz"
      };

      const scope = nock("https://api.github.com")
        .get("/repos/atom/atom/license")
        .reply(200, {
          license
        });

      const response = await chai.request(api).get("/api/v1/test-nock");
      chai.expect(response).to.have.status(200);
      chai.expect(response.body.license.key).to.eq(license.key);
    });
  });
});
