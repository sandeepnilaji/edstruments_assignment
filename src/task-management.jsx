import React, { useState, useEffect } from "react";
import "./taskManagement.css";

function TaskManagement() {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem(
      `tasks_${localStorage.getItem("currentUser")}`
    );
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem(
      `tasks_${localStorage.getItem("currentUser")}`,
      JSON.stringify(tasks)
    );
  }, [tasks]);

  const handleAddTask = () => {
    if (!taskTitle) {
      return; // Prevent adding empty tasks
    }
    setTasks([...tasks, { title: taskTitle, completed: false }]);
    setTaskTitle("");
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleEditTask = (index, newTitle) => {
    if (!newTitle) {
      return; // Prevent setting empty title
    }
    const newTasks = [...tasks];
    newTasks[index].title = newTitle;
    setTasks(newTasks);
    setEditingIndex(null); // Exit editing mode
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // Filter tasks based on the selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true; // Show all tasks
  });

  return (
    <div className="task-management">
      <div className="task-input">
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Add a new task"
        />
        <button className="add-task-button" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <div className="task-filters">
        <button
          className={`filter-pill ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`filter-pill ${filter === "completed" ? "active" : ""}`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
        <button
          className={`filter-pill ${filter === "incomplete" ? "active" : ""}`}
          onClick={() => setFilter("incomplete")}
        >
          Incomplete
        </button>
      </div>
      <ul className="task-list">
        {filteredTasks.map((task, index) => (
          <li
            key={index}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            {editingIndex === index ? (
              <input
                type="text"
                defaultValue={task.title}
                onBlur={(e) => handleEditTask(index, e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleEditTask(index, e.target.value);
                  }
                }}
                autoFocus
              />
            ) : (
              <span
                className={`task-title ${task.completed ? "completed" : ""}`}
              >
                {task.title}
              </span>
            )}
            <div className="task-buttons">
              {!task.completed && (
                <>
                  <button onClick={() => toggleTaskCompletion(index)}>
                    Toggle Complete
                  </button>
                  <button onClick={() => setEditingIndex(index)}>Edit</button>
                </>
              )}
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManagement;
