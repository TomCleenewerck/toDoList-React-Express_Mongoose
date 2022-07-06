//import mongoose from "mongoose";
//const { Task } = require("./models/Task");

const GetTasksAction = (TaskModel) => async (req, res) => {
    try {
        const allTask = await TaskModel.find(req.query);
        return res.status(200).json(allTask);
    } catch (error) {
        return res.formatter.ok({ msg: "Tasks not found" });
    }
};

const GetTaskByIdAction = (TaskModel) => async (req, res) => {
    try {
        const { id } = req.params;
        const task = await TaskModel.findById(id);
        return res.status(200).json(task);
    } catch (error) {
        return res.formatter.ok({ msg: "Task not found" });
    }
};

const DeleteTaskAction = (TaskModel) => async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTasks = await TaskModel.findByIdAndDelete(id);
        return res.status(200).json(deletedTasks);
    } catch (error) {
        return res.formatter.ok({ msg: "Can't delete task" });
    }
};

const CreateTaskAction = (TaskModel) => async (req, res) => {
    try {
        const newTask = new TaskModel({ ...req.body });
        const insertedTask = await newTask.save();
        return res.status(201).json(insertedTask);
    } catch (error) {
        return res.formatter.ok({ msg: "Can't create task" });
    }
};

const UpdateTaskAction = (TaskModel) => async (req, res) => {
    try {
        const { id } = req.params;
        await TaskModel.updateOne({ _id: id }, req.body);
        const updatedTasks = await TaskModel.findById(id);
        return res.status(200).json(updatedTasks);
    } catch (error) {
        return res.formatter.ok({ msg: "Can't update task" });
    }
};

export {
    GetTasksAction,
    GetTaskByIdAction,
    CreateTaskAction,
    DeleteTaskAction,
    UpdateTaskAction,
};
