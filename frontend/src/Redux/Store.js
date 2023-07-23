import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

import { reducer as productReducer } from "./Products/reducer";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./Auth/reducer";
const rootReducer = combineReducers({
  productReducer,
  authReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
