import db from "../../db/db";


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
  const post = {
    id: db.length + 1,
    title: req.body.title,
    description: req.body.description
  };
  db.push(post);
  return res.status(201).send({
    post
  });
};

exports.list = (req, res) => {
  res.status(200).send({
    posts: db
  });
};
