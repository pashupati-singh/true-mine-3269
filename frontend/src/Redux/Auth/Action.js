import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./ActionType";
import axios from "axios";
export const LoginUser = (obj) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  axios
    .post(`https://gardenguru-server.onrender.com/user/login`, obj)
    .then((data) => dispatch({ type: LOGIN_SUCCESS, payload: data.data }))
    .catch((err) => dispatch({ type: LOGIN_FAILURE }));
};
