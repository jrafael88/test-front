import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Reducers } from "./Reducers";

export const store = createStore(Reducers,
  applyMiddleware(logger, thunk)
);
