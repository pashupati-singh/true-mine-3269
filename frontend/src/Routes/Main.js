import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import ProductList from "../Componants/ProductList";

import Home from "../Pages/Home";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        {/* <Route path="/products/:id" element={<ProductList />}></Route> */}
      </Routes>
    </>
  );
};

export default MainRoutes;
