import Post from "./controller";
import express from "express";

const routes = express.Router();

routes.route("/posts").get(Post.list);
routes.route("/posts").post(Post.post);

export default routes;
