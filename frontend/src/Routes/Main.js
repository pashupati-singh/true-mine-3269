import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import ProductList from "../Componants/ProductList";
import { Login } from "../Pages/Login";
import Home from "../Pages/Home";
import SingleProductPage from "../Pages/SingleProductPage";
// import Cart from "../Componants/Cart";
import Signup from "../Pages/SignUp";
import { Payment } from "../Pages/Payment";
import CartPage from "../Componants/CartComponent";


const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/products/:id" element={<SingleProductPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
   
      </Routes>
    </>
  );
};

export default MainRoutes;
