import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SignUp } from "../Redux/SignUp/action";
import image from "../Image/img1.webp";
import "../css/sign.css";

export const Signup = () => {
  const [fName, setFName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = { fName, lName, email, password };
    dispatch(SignUp(obj));
  };

  return (
    <>
      <img className="image" src={image} alt="error" width={"95%"} />
      <div className="img-head">
        <h1>HOME</h1>
        <h1>CREATE ACCOUNT</h1>
      </div>
      <div className="signup">
        <div className="heading">
          <b className="specal">CREATE</b>{" "}
          <b style={{ fontWeight: "bold" }}>ACCOUNT</b>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="label">
            FIRST NAME:
            <br />
            <input
              className="input"
              type="text"
              value={fName}
              name="fName"
              onChange={(e) => setFName(e.target.value)}
            />
          </label>
          <br />
          <label className="label">
            LAST NAME:
            <br />
            <input
              className="input"
              type="text"
              value={lName}
              name="lName"
              onChange={(e) => setlName(e.target.value)}
            />
          </label>
          <br />
          <label className="label">
            EMAIL:
            <br />
            <input
              className="input"
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label className="label">
            PASSWORD:
            <br />
            <input
              className="input"
              type="password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button className="submit" type="submit">
            CREATE
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
