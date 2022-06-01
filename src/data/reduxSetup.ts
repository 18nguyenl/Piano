import { combineReducers } from "@reduxjs/toolkit";
import { countReducer } from "./count";

// List of top-level reducers for the whole app
const combinedReducers = combineReducers({
  counter: countReducer,
});

/**
 * The main top-level reducer for the entire app
 *
 * @param state Previous state
 * @param action Dispatched action
 * @returns new state
 */
export const rootReducer = (state, action) => {
  // State reset button
  if (action.type === "GLOBAL_RESET") {
    state = undefined;
  }

  return combinedReducers(state, action);
};
