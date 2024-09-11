// devicesSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDevices } from "../services/api";

export interface Device {
    device_id: string; // PK
    timestamp: number; // SK (sort key - epoch timestamp)
    installationDate: string;
    model: string;
    location: string;
    deviceName: string;
  }

export interface DevicesState {
  devices: Device[];
  loading: boolean;
  error: string | null;
}

// Async thunk para buscar dispositivos
export const loadDevices = createAsyncThunk("devices/load", async () => {
  const devices = await fetchDevices();
  return devices.devices as Device[];
});

const initialState: DevicesState = {
  devices: [],
  loading: false,
  error: null,
};

const devicesSlice = createSlice({
  name: "devices",
  initialState,
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
      state.error = action.error.message ?? "Erro desconhecido";
    });
  },
});

export default devicesSlice.reducer;
