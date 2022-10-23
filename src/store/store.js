import { configureStore } from "@reduxjs/toolkit";
import { ucabGoSlice } from "./ucabGo/ucabGoSlice";
import { uiSlice } from "./ui/uiSlice";
import { authSlice } from "./auth/authSlice"


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        ucabGo: ucabGoSlice.reducer,
        ui: uiSlice.reducer
    }
})