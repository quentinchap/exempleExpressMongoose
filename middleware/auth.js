import { verifyJWTToken } from "../libs/auth";

export function verifyJWT_MW(req, res, next) {
  let token = req.headers.authorization;
  verifyJWTToken(token)
    .then(decodedToken => {
      req.user = decodedToken.data;
      next();
    })
    .catch(err => {
      res.status(400).json({ message: "Invalid auth token provided." });
    });
}
