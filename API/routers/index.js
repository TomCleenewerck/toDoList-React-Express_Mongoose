import express from "express";
const router = express.Router();
const taskFunc = async (app) => {
    const { default: taskRouter } = await import("./tasks/index.js");
    taskRouter(router);
    app.use("/tasks", router);
};

export default taskFunc;
