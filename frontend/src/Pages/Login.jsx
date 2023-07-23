import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../Redux/Auth/Action";

const Login = () => {
  const { msg, isAuth } = useSelector((store) => store.authReducer);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = { email, password };
    dispatch(LoginUser(obj));
  };

  return (
    <div>
      <h2>Login</h2>
      {isAuth ? <div>{msg}</div> : ""}
      <form onSubmit={handleSubmit}>
        <label>
          EMAIL:
          <br />
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          PASSWORD:
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
