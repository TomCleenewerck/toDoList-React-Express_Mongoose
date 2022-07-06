import { tasksActions } from "../../controllers/tasks/index.js";

export default (router) => {
    //@desc Get all tasks
    //@route /tasks
    router.get("", tasksActions().getTasks);

    //@desc Get a task by id
    //@route /tasks/:id
    router.get("/:id", tasksActions().getTaskById);

    //@desc Create a task
    //@route /tasks
    router.post("", tasksActions().createTask);

    //@desc Update a task
    //@route /tasks/:id
    router.put("/:id", tasksActions().updateTask);

    //@desc Delete a task
    //@route /tasks/:id
    router.delete("/:id", tasksActions().deleteTask);
};
