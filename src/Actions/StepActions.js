export const setStep = (step) => (dispatch, getState) => {
  dispatch({ type: "CHANGE_STEP", value: step });
};
