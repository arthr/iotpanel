import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDevices } from "../services/api";

// Async thunk para buscar dispositivos
export const loadDevices = createAsyncThunk("devices/load", async () => {
  const devices = await fetchDevices();
  return devices;
});

const devicesSlice = createSlice({
  name: "devices",
  initialState: {
    devices: [],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadDevices.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadDevices.fulfilled, (state, action) => {
      state.loading = false;
      state.devices = action.payload;
    });
    builder.addCase(loadDevices.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "Erro ao buscar dispositivos";
    });
  },
});

export default devicesSlice.reducer;
