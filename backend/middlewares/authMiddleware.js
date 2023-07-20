const jwt = require("jsonwebtoken");
require("dotenv").config();
const blacklistModel = require("../models/blacklistModel");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1] || null;

    if (token) {
      const existingToken = await blacklistModel.find({
        blacklist: { $in: token },
      });

      if (existingToken.length) {
        return res
          .status(400)
          .send({ error: "Invaild token, please login again !!!" });
      }

      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.body.userID = decoded.userID;

      return next();
    }
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};

module.exports = authMiddleware;
