import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./reducers/TaskReducer";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
});
