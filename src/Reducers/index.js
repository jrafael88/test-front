import { combineReducers } from "redux";

import { ProductsReducer } from "./ProductsReducer";
import { StepReducer } from "./StepReducer";

export const Reducers = combineReducers({
  products: ProductsReducer,
  steps: StepReducer
});
