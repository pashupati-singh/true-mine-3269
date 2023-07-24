import axios from "axios";
import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREMENT_QUANTITY,
  GET_PRODUCT_SUCCESS,
  INCREMENT_QUANTITY,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  REMOVE_ITEM,
} from "./actionTypes";
import { addToCartAPI } from "../carts/cart.api";

export const getProducts = (obj) => async (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  try {
    const res = await axios.get(
      "https://gardenguru-server.onrender.com/product/getproducts",
      obj
    );
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    return res.data; // Return the data from the API call
  } catch (err) {
    dispatch({ type: PRODUCT_FAILURE });
    throw err; // Rethrow the error so it can be caught in the component
  }
};

export const singleuser = async (id) => {
  let res = await axios.get(
    `https://gardenguru-server.onrender.com/product/getproduct/${id}`
  );
  console.log(res.data);
  return res.data;
};
