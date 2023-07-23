import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as cartReducer } from "./carts/reducer";
import { reducer as productReducer } from "./Products/reducer";
import { reducer as authReducer } from "./Auth/reducer";
import { reducer as signReducer } from "./SignUp/reducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  authReducer,
  productReducer,
  cartReducer,
  signReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
