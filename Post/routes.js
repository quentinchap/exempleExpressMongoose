import express from 'express';
import bodyParser from 'body-parser';
import * as service from './service';

const users = express.Router();

users.use(bodyParser.json());

users.post("/posts", (req, res) => {
  service.createPost(req.body).then(
    users => res.status(200).json(users),
    err => {
      console.error(err);
      res.status(500).send("error");
      return;
    }
  );
});

users.get("/posts", (req, res) => {
  service
    .getByPage(req.query.page || 1, req.query.per_page || 10)
    .then(posts => res.status(200).json({ posts }));
});

export default users;