import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REST,
} from "./ActionType";

const initalState = {
  isAuth: false,
  isLoading: false,
  token: "",
  isError: false,
  userName: "",
  email: "",
  msg: "",
};

export const reducer = (state = initalState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        userName: action.payload.username,
        email: action.payload.email,
        msg: action.payload.msg,
        isAuth: true,
      };
    case LOGIN_FAILURE:
      return { ...state, isError: true };
    case LOGOUT_REST:
      return { ...initalState };
    default:
      return state;
  }
};
