import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reduxSetup";

// Main Redux data store singleton
const store = configureStore({
  reducer: rootReducer,
});

export default store;
