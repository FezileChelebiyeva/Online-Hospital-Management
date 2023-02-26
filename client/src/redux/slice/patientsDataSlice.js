import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  data: [],
  error: "",
  patient: {},
};

export const getPatientsData = createAsyncThunk("getPatientsData", async () => {
  const response = await axios.get("http://localhost:8080/patients");
  return response.data;
});

export const deletePatientsData = createAsyncThunk(
  "deletePatientData",
  async (id) => {
    await axios.delete(`http://localhost:8080/patients/${id}`);
  }
);

export const updatePatientsData = createAsyncThunk(
  "updatePatientsData",
  async (obj) => {
    await axios.put(`http://localhost:8080/patients/${obj.id}`, obj);
  }
);

export const getDataSliceForUser = createSlice({
  name: "patients",
  initialState,
  reducers: {
    patientData: (state, action) => {
      state.patient = action.payload;
    },
  },
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

export const { patientData } = getDataSliceForUser.actions;

export default getDataSliceForUser.reducer;
