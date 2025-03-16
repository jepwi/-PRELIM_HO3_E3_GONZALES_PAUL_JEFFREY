import React, { useState } from "react";
import "../styles/TodoList.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <div className="todo-box">
        <h2 className="todo-title">Todo List</h2>
        <div className="todo-input-container">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="todo-input"
          />
          <button onClick={addTask} className="todo-btn">➕ Add</button>
        </div>
        <ul className="todo-list">
          {tasks.map((task, index) => (
            <li key={index} className="todo-item">
              {task} 
              <button onClick={() => removeTask(index)} className="todo-delete-btn">❌</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
