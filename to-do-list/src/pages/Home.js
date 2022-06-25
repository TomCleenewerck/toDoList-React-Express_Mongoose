import React, { useEffect, useState } from "react";
import Task from "../components/Task";
import axios from "axios";
import icon_new from "../assets/new.png";

const Home = () => {
    //get all tasks
    useEffect(() => {
        console.log("useEffect");
        axios
            .get("http://localhost:3000/tasks")
            .then((res) => setTasks(res.data))
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const [name, setName] = useState("");
    const [tasks, setTasks] = useState([]);

    //insert a new task
    const insertTask = () => {
        console.log("insertTask");
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: name,
                status: "P",
                description: "",
            }),
        };
        fetch("http://localhost:3000/tasks", requestOptions)
            .then((response) => response.json())
            .then((data) => this.setState({ postId: data.id }));
    };

    const nameChange = (event) => {
        setName(event.target.value);
    };
    return (
        <div className="homePage">
            <h1>Tasks</h1>
            <form onSubmit={insertTask} className="newTaskForm">
                <input type="text" name="" onChange={nameChange}></input>
                <span className="btn">
                    <button type="submit">
                        <img src={icon_new} alt="Add"></img>
                    </button>
                </span>
            </form>
            <div className="tasksList">
                {tasks.map((task, index) => (
                    <Task key={index} task={task} />
                ))}
            </div>
        </div>
    );
};

export default Home;
