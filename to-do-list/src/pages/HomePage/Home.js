import React, { useEffect, useState } from "react";
import Task from "../../components/Task";
import icon_new from "../../assets/new.png";

const Home = ({ getTasks, addTasks, tasks: { tasks, loading, nbr } }) => {
    //REDUX
    // get Tasks
    useEffect(() => {
        getTasks();
    }, []);
    const insertTask = () => {
        if (name !== "") {
            addTasks({
                name: name,
                status: "P",
                description: "",
            });
        }
    };
    const [name, setName] = useState("");
    const nameChange = (event) => {
        setName(event.target.value);
    };
    return (
        <div className="homePage">
            <h1>Tasks : {nbr}</h1>
            <form className="newTaskForm">
                <input type="text" name="" onChange={nameChange}></input>
                <span className="btn">
                    <button type="button" onClick={insertTask}>
                        <img src={icon_new} alt="Add"></img>
                    </button>
                </span>
            </form>
            <div className="tasksList">
                {loading === false &&
                    tasks &&
                    tasks.map((task, index) => (
                        <Task key={index} task={task} index={index} />
                    ))}
                {loading === true && console.log("don't load")}
            </div>
        </div>
    );
};

export default Home;
