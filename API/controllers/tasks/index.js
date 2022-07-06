import {
    GetTasksAction,
    GetTaskByIdAction,
    CreateTaskAction,
    DeleteTaskAction,
    UpdateTaskAction,
} from "./taskActions.js";

import Task from "../../models/Task.js";

export const tasksActions = () => ({
    getTasks: GetTasksAction(Task),
    getTaskById: GetTaskByIdAction(Task),
    deleteTask: DeleteTaskAction(Task),
    createTask: CreateTaskAction(Task),
    updateTask: UpdateTaskAction(Task),
});
