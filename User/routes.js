import express from 'express';
import bodyParser from 'body-parser';
import * as service from './service';

const users = express.Router();

users.use(bodyParser.json());

users.post("/users", (req, res) => {
  service.createUser(req.body).then(
    users => res.status(200).json(users),
    err => {
      console.error(err);
      res.status(500).send("error");
      return;
    }
  );
});

users.get("/users", (req, res) => {
  service
    .getByPage(req.query.page || 1, req.query.per_page || 10)
    .then(users => res.status(200).json({ users }));
});

export default users;