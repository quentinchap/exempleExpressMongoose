import users from "./User/routes";
import posts from "./Post/routes";
import express from "express";
import bodyParser from "body-parser";
import { createJWToken } from "./libs/auth";
import allowCrossDomain from "./middleware/node-express-cors-middleware";
import MyLogger from "./middleWare/myLogger";
import axios from "axios";

const routes = express.Router();
routes.use(MyLogger);
routes.use(allowCrossDomain);
routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: true }));

routes.post("/api/v1/login", (req, res) => {
  let { email, password } = req.body;
  if (email === "toto" && password === "toto") {
    res.status(200).json({
      success: true,
      token: createJWToken({
        sessionData: { name: "toto", age: 15 },
        maxAge: 3600
      })
    });
  } else {
    res.status(401).json({
      message: "Login ou mot de passe incorrecte."
    });
  }
});

routes.get("/api/v1/test-nock", (req, res) => {
  axios.get("https://api.github.com/repos/atom/atom/license").then(
    t => {
      res.send({ license: t.data.license });
    },
    err => res.send(t)
  );
});

routes.use("/api/v1", posts);
routes.use("/api/v1", users);

routes.get("/", (req, res) => {
  res.status(200).json({ message: "Connected!" });
});

module.exports = routes;
