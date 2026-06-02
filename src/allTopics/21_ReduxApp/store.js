import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";

//! STEP 1: CREATE A STORE
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});