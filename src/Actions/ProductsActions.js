import { ProductsServices } from "../Services/ProductsServices";

export const getProducts = () => async (dispatch, getState) => {
  dispatch({ type: "FETCH_PRODUCTS" });

  const response = await ProductsServices();
  dispatch({ type: "RECEIVE_PRODUCTS", value: response });
};
