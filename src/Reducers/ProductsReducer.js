const initialState = {
  loading: false,
  discount: null,
  id: null,
  items: null,
  shippingTotal: null,
  subTotal: null,
  total: null,
};

export const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        loading: true,
      };

    case "RECEIVE_PRODUCTS":
      return {
        ...state,
        ...action.value,
        loading: false,
      };

    case "RECEIVE_PRODUCTS_ERROR":
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
