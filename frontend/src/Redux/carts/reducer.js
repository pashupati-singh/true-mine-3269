import {
  GET_CART_LOADING,
  GET_CART_ERROR,
  GET_CART_SUCCESS,
  ADD_TO_CART,
  DELETE_CART,
} from "./actionType";

const initialState = {
  loading: false,
  error: false,
  addProduct: [],
  cart: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CART_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_CART_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_CART_SUCCESS: {
      return {
        ...state,
        loading: false,
        addProduct: payload,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    }
    case DELETE_CART: {
      return {
        ...state,
        cart: [...state.cart],
      };
    }
    default: {
      return state;
    }
  }
};
