import React, { useEffect, useState } from "react";
import axios from "axios";
import icon_delete from "../../assets/delete.svg";
import { tasksLoaded } from "../../redux/reducers/TaskReducer";

const Task = ({ index, task, updateTasks, deleteTasks, tasks: { tasks } }) => {
    const [name, setName] = useState(task.name);
    const [description, setDescription] = useState(task.description);
    let checked = tasks[index].status === "F" ? true : false;
    const updateTaskName = () => {
        updateTasks({
            id: task._id,
            name: name,
        });
    };
    const updateTaskStatus = () => {
        updateTasks({
            id: task._id,
            status: tasks[index].status === "P" ? "F" : "P",
        });
    };
    return (
        <div className={"task " + "statusTask" + tasks[index].status}>
            <div
                className={
                    tasks[index].status === "P"
                        ? "checkbox"
                        : "checkbox-checked"
                }
                onClick={updateTaskStatus}
            >
                <input
                    type="checkbox"
                    defaultChecked={checked}
                    id={"check" + task._id}
                ></input>
            </div>
            <input
                type="text"
                id={"task" + task._id}
                defaultValue={task.name}
                onChange={() => {
                    const name = document.getElementById(
                        "task" + task._id
                    ).value;
                    setName(name);
                }}
                onBlur={updateTaskName}
            ></input>
            <span className="btn">
                <button
                    onClick={() => {
                        deleteTasks({ id: task._id });
                    }}
                >
                    <img src={icon_delete} alt="delete"></img>
                </button>
            </span>
        </div>
    );
};

export default Task;
