import {
  SIGN_REQUEST_FAILURE,
  SIGN_REQUEST_PENDING,
  SIGN_REQUEST_SUCCESS,
} from "./actionTypes";
import axios from "axios";

export const SignUp = (obj) => (dispatch) => {
  dispatch({ type: SIGN_REQUEST_PENDING });
  axios
    .post(`https://gardenguru-server.onrender.com/user/register`, obj)
    .then((res) => dispatch({ type: SIGN_REQUEST_SUCCESS, payload: res.data }))
    .catch(() => dispatch({ type: SIGN_REQUEST_FAILURE }));
};
