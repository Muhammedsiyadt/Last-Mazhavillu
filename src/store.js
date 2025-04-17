import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";
import { constants } from "./constants";

const loggerMiddleware = createLogger();
const user = localStorage.getItem(constants.TOKEN_USERNAME)
  ? JSON.parse(localStorage.getItem(constants.TOKEN_USERNAME))
  : null;
const admin = localStorage.getItem("goldadmin")
  ? JSON.parse(localStorage.getItem("goldadmin"))
  : null;
const persistedState = user || admin ? { user: user, admin: admin } : {};

export const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(thunk, loggerMiddleware)
);
