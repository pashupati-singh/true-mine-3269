import {
  SIGN_REQUEST_FAILURE,
  SIGN_REQUEST_PENDING,
  SIGN_REQUEST_SUCCESS,
} from "./actionTypes";

const initialState = {
  isLoading: "",
  isError: "",
  msg: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_REQUEST_PENDING:
      return { ...state, isLoading: true };
    case SIGN_REQUEST_SUCCESS:
      return { ...state, isLoading: false, msg: action.payload.msg };
    case SIGN_REQUEST_FAILURE:
      return { ...state, isError: true };
    default:
      return state;
  }
};
