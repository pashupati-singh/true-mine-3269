import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import ProductList from "../Componants/ProductList";

import Home from "../Pages/Home";
import SingleProductPage from "../Pages/SingleProductPage";
import Cart from "../Componants/Cart";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/products/:id" element={<SingleProductPage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      
    </>
  );
};

export default MainRoutes;
