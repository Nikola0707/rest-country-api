const reducer_dark_mode = (
  state = {
    backgroundColor: "black",
    color: "white",
  },
  action
) => {
  switch (action.type) {
    case "TO_DARK_MODE":
      return action.payload;
    default:
      return state;
  }
};

export default reducer_dark_mode