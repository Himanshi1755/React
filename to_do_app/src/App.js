import { useState, useRef } from "react";
import Data from "./component/Data";
import "./App.css";

function App() {

    const [taskList, setTaskList] = useState(Data);
    const [priorityList, setPriorityList] = useState([{ priorityId: 1, priorityValue: "Low", }, { priorityId: 2, priorityValue: "Normal", }, { priorityId: 3, priorityValue: "High", }]);
    // const [choice, setchoice] = useState(["Active", "Deactive"]);
    const [defaultPriority, setDefaultPriority] = useState("active");
    const [error, setError] = useState("");
    const [pid, setPid] = useState("0");

    const priorityRef = useRef(null);
    const taskRef = useRef(null);

    const activeCount = taskList.filter(task => task.status == "active").length;
    const deactiveCount = taskList.filter(task => task.status == "deactive").length;

    const changeTaskStatus = (t, status) => {
        let index = taskList.findIndex((task) => { return task.task == t.task });
        t.status = status;
        taskList.splice(index, 1, t);
        setTaskList([...taskList]);
    }
    const submitTask = (event) => {
        event.preventDefault();
        const task = taskRef.current.value;
        const p_id = parseInt(priorityRef.current.value);

        // const errors = [];
        // if (!task) errors.task = "Task is required!";
        // if (!priority) errors.priority = "Priority is required!";
        // if (errors.task || errors.priority) {
        //     errors(errors);
        //     return;
        // }

        const newTask = {
            task: task,
            date: new Date().toLocaleDateString(),
            p_id: p_id,
            status: "active"
        };
        setTaskList([...taskList, newTask]);
    }

    return <>
        <div className="main p-3 text-center text-black md-12" style={{ height: "60px" }}>
            <span className="spanClass">To-Do App</span>
        </div>

        <form onSubmit={submitTask}>
            <div className="container mt-5 md-3">
                <div className="row d-flex">
                    <div className="col-md-6">
                        <input ref={taskRef} type="text" placeholder="Enter Task" className="form-control" />
                    </div>

                    <div className="col-md-6">
                        <select ref={priorityRef} className="form-control">
                            <option value="">Select Priority</option>
                            {priorityList.map((priority, index) => (
                                <option key={index} value={priority.priorityId}>
                                    {priority.priorityValue}
                                </option>
                            ))}
                        </select>
                    </div>

                </div>
                <div className="btn mt-5">
                    <button type="submit" className="btn btn-success">Add Task</button>
                </div>
            </div>
        </form>
        {error && <div className="text-danger text-center mt-2">{error}</div>}

        <div className="select-btn mt-3 ml-5">
            <button className="btn btn-outline-primary mx-2" onClick={() => setDefaultPriority("active")} >Active({activeCount})</button>
            <button className="btn btn-outline-secondary mx-2" onClick={() => setDefaultPriority("deactive")}>Deactive({deactiveCount})</button>
        </div>

        <div class="container mt-3 p-5">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Task</th>
                        <th>Date</th>
                        <th>Priority</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {taskList.filter((task) => task.status === defaultPriority).sort((a, b) => b.p_id - a.p_id).map((task, index) => {
                        let rowColor = "";
                        if (task.p_id == 3) rowColor = "red";
                        else if (task.p_id == 2) rowColor = "yellow";
                        else if (task.p_id == 1) rowColor = "lightgreen";

                        // return <tr key={index} style={{ backgroundColor: task.priority === "High" ? "red" : task.priority === "Normal" ? "yellow" : "green" }}>
                        return <tr key={index} style={{ backgroundColor: rowColor }}>
                            <td>{index + 1}</td>
                            <td>{task.task}</td>
                            <td>{task.date}</td>
                            <td>{priorityList.find((obj) => obj.priorityId === task.p_id)?.priorityValue}</td>
                            <td>
                                {task.status == "active" ? (
                                    <button onClick={() => changeTaskStatus(task, "deactive")} className="btn button-size btn-outline-secondary">Deactive</button>) : (
                                    <button onClick={() => changeTaskStatus(task, "active")} className="btn button-size btn-outline-primary">Active </button>
                                )}
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </>
}

export default App;


// {errors.priority && <div className="text-danger">{errors.priority}</div>}