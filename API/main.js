// @/main.js
const express = require("express");
const mongoose = require("mongoose");
const { Task } = require("./models");
const { url } = require("./config");

const app = express();

app.use(express.json());

app.get("/tasks", async (req, res) => {
    const allTask = await Task.find(req.query);
    return res.status(200).json(allTask);
});

app.get("/tasks/:id", async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    return res.status(200).json(task);
});

app.post("/tasks", async (req, res) => {
    const newTask = new Task({ ...req.body });
    const insertedTask = await newTask.save();
    return res.status(201).json(insertedTask);
});

app.put("/tasks/:id", async (req, res) => {
    const { id } = req.params;
    await Task.updateOne({ id }, req.body);
    const updatedTasks = await Task.findById(id);
    return res.status(200).json(updatedTasks);
});

app.delete("/tasks/:id", async (req, res) => {
    const { id } = req.params;
    const deletedTasks = await Task.findByIdAndDelete(id);
    return res.status(200).json(deletedTasks);
});

const start = async () => {
    try {
        await mongoose.connect(url);
        app.listen(3000, () => console.log("Server started on port 3000"));
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start();
