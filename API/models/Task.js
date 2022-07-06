import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        status: {
            type: String,
        },
        description: {
            type: String,
        },
    },
    { versionKey: false }
);

const Task = mongoose.model("tasks", TaskSchema);

export default Task;
