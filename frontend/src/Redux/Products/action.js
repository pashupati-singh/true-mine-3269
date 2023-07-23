import axios from "axios";
import { ADD_TO_CART, CLEAR_CART, DECREMENT_QUANTITY, GET_PRODUCT_SUCCESS, INCREMENT_QUANTITY, PRODUCT_FAILURE, PRODUCT_REQUEST, REMOVE_ITEM, TOTAL_PRICE } from "./actionTypes"; 

export const getProducts = (obj) => async (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  try {
    const res = await axios.get("https://gardenguru-server.onrender.com/product/getproducts", obj);
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    return res.data; // Return the data from the API call
  } catch (err) {
    dispatch({ type: PRODUCT_FAILURE });
    throw err; // Rethrow the error so it can be caught in the component
  }
};


// export const addToCart = (id) => {

//   return { type: ADD_TO_CART, payload: +id };
// };
// export const removeItem = (id) => {

//   return { type: REMOVE_ITEM, payload: id };
// };
// export const clearCart = () => {
//   return { type: CLEAR_CART};
// };
// export const incrementFunc = (id) => {
//   return { type: INCREMENT_QUANTITY, payload: id };
// };
// export const decrementFunc = (id) => {
//   return { type: DECREMENT_QUANTITY, payload: id };
// };
// export const totalCartPrice = () => {
//   return { type: TOTAL_PRICE };
// };
