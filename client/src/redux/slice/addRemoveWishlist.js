import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.data.push(action.payload);
    },
    removeToWishlist: (state, action) => {
      state.data = state.data.filter((elem) => elem._id !== action.payload);
    },
    removeAll: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addToWishlist, removeToWishlist , removeAll} = wishlistSlice.actions;

export default wishlistSlice.reducer;
