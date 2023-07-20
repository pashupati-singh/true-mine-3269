const express = require("express");
const userRoutes = express.Router();
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const blacklistModel = require("../models/blacklistModel");

userRoutes.post("/register", async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .send({ msg: "User already exists, Please register again" });
    }

    const nameRegex = /^\S*$/;
    if (!nameRegex.test(firstname)) {
      return res
        .status(400)
        .send({ msg: "White space is not allowed in the firstname" });
    }

    if (!nameRegex.test(lastname)) {
      return res
        .status(400)
        .send({ msg: "White space is not allowed in the lastname" });
    }

    const emailRegex = /^\S*$/;
    if (!emailRegex.test(email.trim())) {
      return res
        .status(400)
        .send({ msg: "White space is not allowed in the email address" });
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])([A-Za-z\d@$!%*?&]{8,})$/;
    if (!passwordRegex.test(password)) {
      return res
        .status(400)
        .send({ msg: "Weak password, Please select a new password" });
    }

    const hashPassword = await bcrypt.hash(password, 8);
    const user = await userModel.create({
      ...req.body,
      password: hashPassword,
    });

    return res.status(200).send({ msg: "Registered successfull", user });
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

userRoutes.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userCheck = await userModel.findOne({ email });
    if (!userCheck) {
      return res
        .status(400)
        .send({ msg: "User doesn't exist, Please register again" });
    }

    const passwordCheck = await bcrypt.compare(password, userCheck.password);

    if (passwordCheck) {
      const token = jwt.sign({ userID: userCheck._id }, process.env.SECRET_KEY);

      return res.status(200).send({
        msg: "Login successfull",
        token,
        username: `${userCheck.firstname} ${userCheck.lastname}`,
      });
    } else {
      return res
        .status(400)
        .send({ msg: "Invaild password, please try again" });
    }
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

userRoutes.post("/logout", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1] || null;

    // console.log(token);

    if (!token) {
      return res.status(401).send({ msg: "Invaild token, please login again" });
    }

    const xxx = await addToBlacklist(token);

    console.log("sabir", xxx);

    return res.status(200).send({ msg: "Logged out successfull" });
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

const addToBlacklist = async (token) => {
  try {
    const existingBlacklist = await blacklistModel.findOne();

    if (token) {
      const existingToken = await blacklistModel.find({
        blacklist: { $in: token },
      });

      console.log(existingToken.length);

      if (existingToken.length) {
        return { error: "Invaild token, please try again" };
      }
    }

    if (existingBlacklist) {
      // If the blacklist document already exists, push the token to the array
      existingBlacklist.blacklist.push(token);
      await existingBlacklist.save();
    } else {
      // If the blacklist document does not exist, create a new one
      await blacklistModel.create({ blacklist: [token] });
    }
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = userRoutes;
