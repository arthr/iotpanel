import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import devicesSlice from "./devicesSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        devices: devicesSlice,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;