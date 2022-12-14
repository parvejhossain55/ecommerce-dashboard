import { configureStore } from "@reduxjs/toolkit";
import settingSlice from "./state/settingSlice";

export const store = configureStore({
    reducer: {
        setting: settingSlice
    },
});
