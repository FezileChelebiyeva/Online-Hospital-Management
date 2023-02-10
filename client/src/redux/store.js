import { configureStore } from "@reduxjs/toolkit";
import getDataReducer from "./slice/dataSlice";

export const store = configureStore({
  reducer: {
    doctors: getDataReducer,
  },
});