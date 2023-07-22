import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../css/payment.css";
import image from "../Image/img2.png";

export const Payment = () => {
  const { Auth, email } = useSelector((store) => store.authReducer);

  const data = [
    {
      id: 4,
      image:
        "data:image/png;base64,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",
      price: 700,
      name: "Garden Guru",
    },
    {
      id: 2,
      image:
        "data:image/png;base64,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",
      price: 500,
      name: "Garden Guru",
    },
  ];

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
