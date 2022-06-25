import React, { useState } from "react";
import axios from "axios";
import icon_delete from "../assets/delete.svg";

const Task = ({ task }) => {
    const [status, setStatus] = useState(task.status);
    let checked = status === "F" ? true : false;
    return (
        <div className={"task " + "statusTask" + status}>
            <div className={status === "P" ? "checkbox" : "checkbox-checked"}>
                <input
                    type="checkbox"
                    defaultChecked={checked}
                    id={"check" + task._id}
                    onClick={() => {
                        const request =
                            "http://localhost:3000/tasks/" + task._id;
                        let body;
                        if (status === "P") {
                            setStatus("F");
                            body = { status: "F" };
                        } else {
                            setStatus("P");
                            body = { status: "P" };
                        }
                        checked = !checked;
                        axios
                            .put(request, body)
                            .then((response) => console.log(response))
                            .catch((err) => console.warn(err));
                    }}
                ></input>
            </div>
            <input
                type="text"
                id={"task" + task._id}
                defaultValue={task.name}
                onBlur={() => {
                    const name = document.getElementById(
                        "task" + task._id
                    ).value;
                    if (task.name !== name) {
                        let body = { name: name };
                        const request =
                            "http://localhost:3000/tasks/" + task._id;
                        axios
                            .put(request, body)
                            .then((response) => console.log(response.data.name))
                            .catch((err) => console.warn(err));
                    }
                }}
            ></input>
            <span className="btn">
                <button
                    onClick={() => {
                        if (window.confirm("Confirm delete task")) {
                            const request =
                                "http://localhost:3000/tasks/" + task._id;
                            axios
                                .delete(request)
                                .then((response) => console.log(response))
                                .catch((err) => console.warn(err));
                            window.location.reload();
                        }
                    }}
                >
                    <img src={icon_delete} alt="delete"></img>
                </button>
            </span>
        </div>
    );
};

export default Task;
