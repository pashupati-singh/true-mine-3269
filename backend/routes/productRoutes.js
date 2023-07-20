const express = require("express");
const productRoutes = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const productModel = require("../models/productModel");

productRoutes.use(authMiddleware);

// write you products routes here ...

module.exports = productRoutes;
