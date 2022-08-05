import { combineReducers } from "redux";
import userReducer from "./userReducer";
// import { userState } from "react";

const rootReducer = combineReducers({
  userState: userReducer,
});

export default rootReducer;
