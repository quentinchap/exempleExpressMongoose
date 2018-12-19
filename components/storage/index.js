exports.postImg = (req, res) => {
  console.log(req.file);
  res.status(200).json(req.file);
};

exports.getImg = (req, res) => {
  var file = __dirname + "/isima.png";
  res.download(file); // Set disposition and send it.
};
