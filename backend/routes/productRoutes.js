const express = require("express");
const productRoutes = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const productModel = require("../models/productModel");
const cartModel = require("../models/cartModel");

productRoutes.use(authMiddleware);

productRoutes.get("/getproducts", async (req, res) => {
  try {
    const { title, pageno, pagelimit, sortbyprice } = req.query;
    const query = new Object();
    if (title) {
      query.title = RegExp(title, "i");
    }
    const toSkip = pageno * pagelimit - pagelimit;
    let sortOrder = null;
    let sortBy = null;

    if (sortbyprice) {
      sortBy = "price";
    }

    if (sortbyprice === "asc") {
      sortOrder = 1;
    } else if (sortbyprice === "desc") {
      sortOrder = -1;
    }

    const products = await productModel
      .find(query)
      .sort({ [sortBy]: sortOrder })
      .skip(toSkip)
      .limit(pagelimit);

    return res.status(200).send(products);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

productRoutes.get("/addtocart", async (req, res) => {
  try {
    const existingUserID = req.body.userID;

    const cartProducts = await cartModel.find({
      userID: existingUserID,
    });
    return res.status(200).send(cartProducts);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

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

    if (product.userID.toString() === existingUserID) {
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
