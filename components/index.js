
import express from "express";
import post from "./post/routes";
import post2 from "./post2/routes";
const routes = express.Router();

routes.use('/api/v1/', post);
routes.use('/api/v2/', post2);

export default routes;