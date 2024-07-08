import { configureStore } from "@reduxjs/toolkit";
import animationSlice from "./features/animation/animationSlice";

export const store = configureStore({
    reducer: {
        animation: animationSlice,
    },
    devTools: process.env.NODE_ENV !== "production" ? true : false,
});
