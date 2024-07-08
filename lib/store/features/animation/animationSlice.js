import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    start: false,
};

export const animationSlice = createSlice({
    name: "animation",
    initialState,
    reducers: {
        toggleAnimation: (state, action) => {
            state.start = !state.start;
        },
    },
});

export const { toggleAnimation } = animationSlice.actions;

export default animationSlice.reducer;
