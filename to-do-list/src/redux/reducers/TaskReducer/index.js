import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    loading: true,
    nbr: 0,
};

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        tasksLoaded: (state, action) => {
            state.tasks = action.payload;
            state.loading = false;
            state.nbr = action.payload.length;
        },
        tasksLoading_Failed: (state, action) => {
            state.tasks = [];
            state.loading = true;
        },
        startLoading: (state, action) => {
            state.loading = true;
        },
        addTask: (state, action) => {
            state.tasks.push(action.payload);
            state.nbr += 1;
        },
        deleteTask: (state, action) => {
            state.nbr -= 1;
            const temp = state.tasks.filter(
                (t) => t._id !== action.payload._id
            );
            state.tasks = temp;
        },
        updateTask: (state, action) => {
            const temp = state.tasks.map((t) => {
                if (action.payload.status && t._id === action.payload._id) {
                    t.status = action.payload.status;
                } else if (
                    action.payload.name &&
                    t._id === action.payload._id
                ) {
                    t.name = action.payload.name;
                }
                return t;
            });
            state.tasks = temp;
        },
    },
});

export const {
    tasksLoaded,
    tasksLoading_Failed,
    startLoading,
    addTask,
    deleteTask,
    updateTask,
} = taskSlice.actions;

export default taskSlice.reducer;
