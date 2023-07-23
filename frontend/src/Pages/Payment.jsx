import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../css/payment.css";
import image from "../Image/img2.png";

export const Payment = () => {
  const { Auth, email } = useSelector((store) => store.authReducer);
  const [data, setData] = useState([]);
  // const { Auth, email } = useSelector((store) => store.authReducer);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [company, setCompany] = useState("");
  const [add, setAdd] = useState("");
  const [apart, setApart] = useState("");
  const [pin, setPin] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [show, setShow] = useState(true);
  const shipPrice = 80;

  let bag = "";
  bag +=
    fname +
    " " +
    lname +
    " " +
    company +
    " " +
    add +
    " " +
    apart +
    " " +
    pin +
    " " +
    state +
    " " +
    city;

  const handlebtn = () => {
    setShow(false);
  };
  axios
    .get(`https://gardenguru-server.onrender.com/cartproducts`)
    .then((res) => setData(res.data));

  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += +data[i].price;
  }

  return (
    <div>
      <img className="paymentImg" src={image} alt="error" />

      <div className="container">
        {show ? (
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
              <input
                type="text"
                placeholder="First Name"
                required
                onChange={(e) => setFname(e.target.value)}
                name="fname"
                value={fname}
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                onChange={(e) => setLname(e.target.value)}
                name="lname"
                value={lname}
              />
              <input
                type="text"
                placeholder="Company (optional)"
                onChange={(e) => setCompany(e.target.value)}
                name="company"
                value={company}
              />
              <input
                type="text"
                placeholder="Address"
                required
                onChange={(e) => setAdd(e.target.value)}
                name="add"
                value={add}
              />
              <input
                type="text"
                placeholder="Apartment, suite, etc (optional)"
                onChange={(e) => setApart(e.target.value)}
                name="apart"
                value={apart}
              />
              <input
                type="text"
                placeholder="City"
                required
                onChange={(e) => setCity(e.target.value)}
                name="city"
                value={city}
              />
              <input
                type="text"
                placeholder="State"
                required
                onChange={(e) => setState(e.target.value)}
                name="state"
                value={state}
              />
              <input
                type="text"
                placeholder="PIN code"
                required
                onChange={(e) => setPin(e.target.value)}
                name="pin"
                value={pin}
              />
              <input
                type="number"
                placeholder="Phone"
                required
                onChange={(e) => setPhone(e.target.value)}
                name="phone"
                value={phone}
              />
            </div>
            <button className="btn" onClick={handlebtn}>
              Continue to shipping
            </button>
          </div>
        ) : (
          <div className="payment">
            <label>
              Contact:
              <br />
              <input type="text" value={email} disabled />
            </label>
            <br />
            <label>
              Ship To:
              <br />
              <div style={{ border: "1px solid black" }}>{bag}</div>
            </label>
            <br />
            <label>
              Phone:
              <br />
              <div>{phone}</div>
            </label>
            <br />
            <label>
              Shipment Amount:
              <br />
              <div>{shipPrice}</div>
            </label>
            <br />
            <button onClick={() => setShow(true)}>back</button>
          </div>
        )}
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
