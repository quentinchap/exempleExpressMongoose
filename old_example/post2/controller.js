import db from "../../db/db";
import services from "./services";

exports.post = (req, res) => {
  if (!req.body.title) {
    return res.status(400).send({
      message: "title is required"
    });
  } else if (!req.body.description) {
    return res.status(400).send({
      message: "description is required"
    });
  }
  services.createPost(req.body).then(
    post => res.status(200).json(post),
    err => {
      res.status(500).send("error");
      return;
    }
  );
};

exports.list = async (req, res) => {
  const list  = await services.list()
  res.status(200).send({
    posts: list
  });
};
