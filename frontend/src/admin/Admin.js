import React, { useLayoutEffect } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Product from "./Product";
import Users from "./Users";
import UserLog from "./UserLog";
import style from "./Admin.module.css";

export default function Admin() {
  useLayoutEffect(() => {
    // const homePageNavbar = document.getElementsByClassName("navbar");
    // const homePageFooter = document.getElementsByClassName("footer");

    const homePageNavbars = document.querySelectorAll(".navbar");
    const homePageFooters = document.querySelectorAll(".footer");

    // homePageNavbars[0].style.display = "none";
    // homePageFooters[0].style.display = "none";

    homePageNavbars.forEach((navbar) => {
      navbar.style.display = "none";
    });

    homePageFooters.forEach((footer) => {
      footer.style.display = "none";
    });

    return () => {
      // homePageNavbars[0].style.display = "block";
      // homePageFooters[0].style.display = "block";

      homePageNavbars.forEach((navbar) => {
        navbar.style.display = "block";
      });

      // Restore the display property for all elements with class "footer"
      homePageFooters.forEach((footer) => {
        footer.style.display = "block";
      });
    };
  }, []);

  return (
    <div>
      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div style={{ width: "20%", height: "50px", backgroundColor: "blue" }}>
          Dashboard
        </div>
        <div style={{ width: "20%", height: "50px", backgroundColor: "red" }}>
          Product
        </div>
        <div style={{ width: "20%", height: "50px", backgroundColor: "green" }}>
          UserLog
        </div>
        <div
          style={{ width: "20%", height: "50px", backgroundColor: "voilet" }}
        >
          Users
        </div>
      </div>
      <div className={style.adminPageDiv}>
        <div className={style.homeDiv}>
          <nav className={style.NavDiv}>
            <div className={style.logoDiv}>
              <img
                src="https://gardenguru.in/cdn/shop/products/417-cucumber-beit-alpha-seeds_grande.jpg?v=1621080197"
                alt="Study Buddy"
              />
            </div>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${style.Active}` : `${style.notActive}`
              }
              to="/admin/dashboard"
            >
              <span className="material-symbols-outlined">home</span>
              <span>Dashboard</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${style.Active}` : `${style.notActive}`
              }
              to="/admin/product"
            >
              <span className="material-symbols-outlined">inventory</span>
              <span>Product</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${style.Active}` : `${style.notActive}`
              }
              to="/admin/users"
            >
              <span className="material-symbols-outlined">group</span>
              <span>Users</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${style.Active}` : `${style.notActive}`
              }
              to="/admin/userLog"
            >
              <span className="material-symbols-outlined">verified_user</span>
              <span>UserLog</span>
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}
