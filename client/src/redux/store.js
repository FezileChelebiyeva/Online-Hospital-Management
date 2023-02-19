import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./slice/addRemoveWishlist";
import darkModeReducer from "./slice/darkMode";
import getDataReducer from "./slice/doctorsDataSlice";
import getDataReducerForUser from "./slice/patientsDataSlice";

export const store = configureStore({
  reducer: {
    doctors: getDataReducer,
    darkMode: darkModeReducer,
    patients: getDataReducerForUser,
    wishlist: wishlistReducer
  },
});
