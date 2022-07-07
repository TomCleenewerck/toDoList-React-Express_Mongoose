import axios from "axios";
import {
    getTasksAction,
    addTaskAction,
    updateTaskAction,
    deleteTaskAction,
} from "./taskActions";

const instance = axios;
const task_url = "http://localhost:3000/tasks/";

const getTasks = getTasksAction({
    ApiCall: instance,
    url: task_url,
});
const addTasks = addTaskAction({
    ApiCall: instance,
    url: task_url,
});
const updateTasks = updateTaskAction({
    ApiCall: instance,
    url: task_url,
});
const deleteTasks = deleteTaskAction({
    ApiCall: instance,
    url: task_url,
});

export { getTasks, addTasks, updateTasks, deleteTasks };
