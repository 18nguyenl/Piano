import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reduxSetup";

import { countReducer } from "./count";

const initialState = {
  count: 0,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
