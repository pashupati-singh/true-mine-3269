const express = require("express");
const productRoutes = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const productModel = require("../models/productModel");
const cartModel = require("../models/cartModel");

productRoutes.get("/getproducts", async (req, res) => {
  try {
    const { title, pageno, pagelimit, sortbyprice, category, type } = req.query;
    const query = {};

    if (title) {
      query.title = new RegExp(title, "i");
    }

    if (category && type) {
      query.$and = [
        { category: new RegExp(category, "i") },
        { type: new RegExp(type, "i") },
      ];
    } else if (category || type) {
      query.$or = [];

      if (category) {
        query.$or.push({ category: new RegExp(category, "i") });
      }

      if (type) {
        query.$or.push({ type: new RegExp(type, "i") });
      }
    }

    const skip = (pageno - 1) * pagelimit;
    const sort = {};

    if (sortbyprice) {
      sort.price = sortbyprice === "asc" ? 1 : -1;
    }
    console.log("query", query);

    const products = await productModel
      .find(query)
      .sort(sort)
      .skip(skip)
      .limit(Number(pagelimit));

    res.status(200).send(products);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

productRoutes.get("/getproduct/:productID", async (req, res) => {
  try {
    const productID = req.params.productID;

    const product = await productModel.findById(productID);

    return res.status(200).send(product);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

productRoutes.use(authMiddleware);

productRoutes.post("/addproduct", async (req, res) => {
  try {
    const existingUserID = req.body.userID;

    const product = await productModel.create({
      ...req.body,
      userID: existingUserID,
    });

    product.populate();
    return res
      .status(200)
      .send({ msg: "Product has been added successfully", product });
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

productRoutes.patch("/update/:productID", async (req, res) => {
  try {
    const existingUserID = req.body.userID;
    const productID = req.params.productID;

    const product = await productModel.findById(productID);

    if (product.userID.toString() == existingUserID) {
      const updatedProduct = await productModel.findByIdAndUpdate(
        productID,
        req.body,
        {
          new: true,
        }
      );
      return res
        .status(200)
        .send({ msg: "Product has been updated successfully", updatedProduct });
    } else {
      return res.status(400).send({ msg: "Invaild user ID" });
    }
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

productRoutes.delete("/delete/:productID", async (req, res) => {
  try {
    const existingUserID = req.body.userID;
    const productID = req.params.productID;

    const product = await productModel.findById(productID);

    if (product.userID.toString() == existingUserID) {
      const deletedProduct = await productModel.findByIdAndDelete(productID);
      return res
        .status(200)
        .send({ msg: "Product has been deleted successfully", deletedProduct });
    } else {
      return res.status(400).send({ msg: "Invaild user ID" });
    }
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

module.exports = productRoutes;
