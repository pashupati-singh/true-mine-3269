const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    // write you schema requirement here, which would be in the peoduct
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;
