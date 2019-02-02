import express from "express";
import bodyParser from "body-parser";
import * as service from "./service";
import { verifyJWT_MW } from "../middleware/auth";

const router = express.Router();

router.use(bodyParser.json());
router.get("/posts", (req, res) => {
  service
    .getByPage(req.query.page || 1, req.query.per_page || 10)
    .then(posts => res.status(200).json({ posts }));
});
router.all("/posts", verifyJWT_MW);

router.post("/posts", (req, res) => {
  service.createPost(req.body).then(
    users => res.status(200).json(users),
    err => {
      console.error(err);
      res.status(500).send("error");
      return;
    }
  );
});



export default router;
