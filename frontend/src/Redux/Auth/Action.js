import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REST,
} from "./ActionType";
import axios from "axios";

export const LoginUser = (obj) => (dispatch) => {
  // console.log("trigger");
  dispatch({ type: LOGIN_REQUEST });

  // Return the axios.post() promise here
  return axios
    .post(`https://mock-api-template2-ighr.onrender.com/login`, obj)
    .then((data) => {
      // console.log(data.data);
      dispatch({ type: LOGIN_SUCCESS, payload: data.data });
      return data.data;
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE });
      throw err; // Re-throw the error to allow handling it in the component if needed
    });
};
export const Logout = (token) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  // Define the headers with the token
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  // Dispatch the LOGOUT_REST action to reset the state
  return axios
    .post(`http://localhost:8080/user/logout`, null, { headers })
    .then((data) => {
      // console.log(data.data);
      dispatch({ type: LOGOUT_REST });
      return data.data;
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE });
      throw err;
    });
};
