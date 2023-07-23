const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const connection = require("./db");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const { orders } = require("./controller/paymentController");
const { verify } = require("jsonwebtoken");

app.use(express.json());
app.use(express.text());
app.use(cors());

app.get("/", (req, res) => {
  try {
    return res.status(200).send("Gardenguru Homepage...");
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

app.use("/user", userRoutes);
app.use("/product", productRoutes);
app.use("/cart", cartRoutes);
app.post("/orders",orders)
app.post("/verify",verify);
app.listen(process.env.PORT || 7070, () => {
  try {
    connection();

    console.log(`Server is runing on port ${process.env.PORT}...`);
  } catch (error) {
    console.log({ error: error.message });
  }
});
