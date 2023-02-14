import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const getPatientsData = createAsyncThunk("getPatientData", async (value) => {
  const response = await axios.get("http://localhost:8080/patients");
  return response.data;
});

export const postPatientsData = createAsyncThunk("postPatientData", async (values) => {
  await axios.post("http://localhost:8080/patients", values);
});

export const deletePatientsData = createAsyncThunk("deletePatientData", async (id) => {
  await axios.delete(`http://localhost:8080/patients/${id}`);
});

export const getDataSliceForUser = createSlice({
  name: "patients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPatientsData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getPatientsData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getPatientsData.rejected, (state, action) => {
      state.loading = false;
      state.error = "data not found";
    });
  },
});

export default getDataSliceForUser.reducer;
