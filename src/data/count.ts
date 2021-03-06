import { createAction, createReducer } from "@reduxjs/toolkit";

// Actions
export const incrementCount = createAction("INCREMENT_COUNT");
export const decrementCount = createAction("DECREMENT_COUNT");

/**
 * Reducer handling counts across the app
 */
export const countReducer = createReducer({ count: 0 }, (builder) => {
  builder.addCase(incrementCount, (state, action) => {
    state.count++;
  });
  builder.addCase(decrementCount, (state, action) => {
    state.count--;
  });
});
