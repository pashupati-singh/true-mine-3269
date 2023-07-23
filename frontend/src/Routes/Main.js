import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";

import Home from "../Pages/Home";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
};

export default MainRoutes;
