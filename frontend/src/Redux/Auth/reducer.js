import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./ActionType";

const initalState = {
  isLoading: false,
  token: "",
  isError: false,
};

export const reducer = (state = initalState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.payload,
      };
    case LOGIN_FAILURE:
      return { ...state, isError: true };
    default:
      return state;
  }
};
