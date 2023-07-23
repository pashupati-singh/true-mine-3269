import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../css/payment.css";
import image from "../Image/img2.png";

export const Payment = () => {
  const { Auth, email } = useSelector((store) => store.authReducer);
  const [data, setData] = useState([]);

  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += +data[i].price;
  }

  return (
    <div>
      <img className="paymentImg" src={image} alt="error" />

      <div className="container">
        <div className="payment">
          <div className="contact">
            <p style={{ fontSize: "30px", fontWeight: "500" }}>Contact</p>
            <p style={{ fontSize: "30px", fontWeight: "200" }}>
              Already have an account?{" "}
              <Link to={"/login"} style={{ color: "green" }}>
                Log in
              </Link>
            </p>
          </div>
          {Auth ? (
            <input type="text" placeholder="Email" value={email} />
          ) : (
            <input type="text" placeholder="Email" />
          )}
          <div>
            <p className="headingP">Shipping address</p>
            <input type="text" value={"India"} disabled />
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Company" />
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="Apartment, suite, etc" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
            <input type="text" placeholder="PIN code" />
            <input type="number" placeholder="Phone" />
          </div>
          <button className="btn">Continue to shipping</button>
        </div>
        <div className="order">
          <div>
            {data.map((ele) => (
              <div
                key={ele.id}
                style={{
                  marginLeft: "40px",
                  marginTop: "30px",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <img
                  src={ele.image}
                  alt="error"
                  width={"100px"}
                  height={"100px"}
                />
                <p>{ele.name}</p>
                <p>{ele.price}</p>
              </div>
            ))}
            <hr />
            <p>Total Price: {sum}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
