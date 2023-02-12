import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    darkModeState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { darkModeState } = darkModeSlice.actions;

export default darkModeSlice.reducer;
