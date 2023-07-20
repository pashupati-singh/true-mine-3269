const express = require("express");
const userRoutes = express.Router();
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const blacklistModel = require("../models/blacklistModel");
const authMiddleware = require("../middlewares/authMiddleware");

userRoutes.post("/register", async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .send({ msg: "User already exists, Please register again !!!" });
    }

    const nameRegex = /^\S*$/;
    if (!nameRegex.test(firstname)) {
      return res
        .status(400)
        .send({ msg: "White space is not allowed in the firstname !!!" });
    }

    if (!nameRegex.test(lastname)) {
      return res
        .status(400)
        .send({ msg: "White space is not allowed in the lastname !!!" });
    }

    const emailRegex = /^\S*$/;
    if (!emailRegex.test(email.trim())) {
      return res
        .status(400)
        .send({ msg: "White space is not allowed in the email address !!!" });
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])([A-Za-z\d@$!%*?&]{8,})$/;
    if (!passwordRegex.test(password)) {
      return res
        .status(400)
        .send({ msg: "Weak password, Please select a new password !!!" });
    }

    const hashPassword = await bcrypt.hash(password, 8);
    const user = await userModel.create({
      ...req.body,
      password: hashPassword,
    });

    return res
      .status(200)
      .send({ msg: "A new user has been registered successfully !!!", user });
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
        .send({ msg: "User doesn't exist, Please register again !!!" });
    }

    const passwordCheck = await bcrypt.compare(password, userCheck.password);

    if (!passwordCheck) {
      return res.status(400).send({ msg: "Please enter your password !!!" });
    }

    if (passwordCheck) {
      const token = jwt.sign({ userID: userCheck._id }, process.env.SECRET_KEY);

      return res.status(200).send({
        msg: "Login successful !!!",
        token,
        username: `${userCheck.firstname} ${userCheck.lastname}`,
      });
    } else {
      return res
        .status(400)
        .send({ msg: "Incorrect Password, please try again !!!" });
    }
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

userRoutes.get("/logout", authMiddleware, async (req, res) => {
  try {
    await blacklistModel.updateMany({}, { $push: { blacklist: [token] } });
    return res.status(200).send({ msg: "Logout successful !!!" });
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

module.exports = userRoutes;
