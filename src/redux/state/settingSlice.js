import { createSlice } from "@reduxjs/toolkit";

export const settingSlice = createSlice({
    name: "setting",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state, action) => {
            state.value = action.payload
        },
        decrement: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {increment, decrement} = settingSlice.actions
export default settingSlice.reducer