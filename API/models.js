const mongoose = require("mongoose");

const Tasks = new mongoose.Schema({
    name: {
        type: String,
    },
    status: {
        type: String,
    },
    description: {
        type: String,
    },
});

const Task = mongoose.model("tasks", Tasks);

module.exports = { Task };
