import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./slice/darkMode";
import getDataReducer from "./slice/doctorsDataSlice";

export const store = configureStore({
  reducer: {
    doctors: getDataReducer,
    darkMode: darkModeReducer,
  },
});
