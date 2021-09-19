export const changeBackground = (mode) => {
  return (dispatch) => {
    dispatch({
      type: "CHANGE_MODE",
      payload: mode,
    });
  };
};
