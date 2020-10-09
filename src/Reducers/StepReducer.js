import { STEPS } from "../Enum";

const initialState = {
  step: STEPS.SHOPPINGCART,
};

export const StepReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_STEP":
      return {
        ...state,
        step: action.value,
      };

    default:
      return state;
  }
};
