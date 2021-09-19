import { combineReducers } from "redux";
import backgroundReducer from "./backgroundReducer";
import darkModeReducer from "./darkMode"

const reducers = combineReducers({
  mode: backgroundReducer,
  dark: darkModeReducer
});

export default reducers;
