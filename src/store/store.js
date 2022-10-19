import { configureStore } from "@reduxjs/toolkit";
import { ucabGoSlice } from "./ucabGo/ucabGoSlice";
import { uiSlice } from "./ui/uiSlice";


export const store = configureStore({
    reducer: {
        ucabGo: ucabGoSlice.reducer,
        ui: uiSlice.reducer
    }
})