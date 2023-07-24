import { Dispatch } from "redux";
import {
  GET_CART_LOADING,
  GET_CART_ERROR,
  ADD_TO_CART,
  GET_CART_SUCCESS,
  DELETE_CART,
} from "./actionType";
import { getCartAPI, deleteItemAPI } from "./cart.api";
import axios from "axios";
// Object Function
export const AddCartObj = (payload) => {
  return { type: ADD_TO_CART, payload };
};

//   here i have to get current user email
let currentUser = { email: "havetoenter" };

export const getCartData = () => async (dispatch) => {
  dispatch({ type: GET_CART_LOADING });
  try {
    let response = await getCartAPI();
    let data = response.data;
    dispatch({ type: GET_CART_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_CART_ERROR });
  }
};

export const deleteItem = (id) => async (dispatch) => {
  await deleteItemAPI(id);
  dispatch(getCartData());
};

// Add Data to Cart Function
export const AddToCart = (_id) => (dispatch) => {
  fetch(`https://gardenguru-server.onrender.com/cart/addcartproduct/${_id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => dispatch({ type: ADD_TO_CART, payload: data }))
    .catch((err) => console.log(err));
};

export const DeleteCartObj = (payload) => {
  return { type: DELETE_CART, payload };
};

export const deleteCartItem = (id) => {
  return { type: DELETE_CART, payload: id };
};
