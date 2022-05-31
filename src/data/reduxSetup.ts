import { combineReducers } from "@reduxjs/toolkit";
import { countReducer } from "./count";

const combinedReducers = combineReducers({
  counter: countReducer,
});

export const rootReducer = (state, action) => {
  if (action.type === "GLOBAL_RESET") {
    state = undefined;
  }

  return combinedReducers(state, action);
};
