import React, { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children, username }) => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem(`tasks_${username}`);
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [filter, setFilter] = useState("all"); // Filter state

  useEffect(() => {
    localStorage.setItem(`tasks_${username}`, JSON.stringify(tasks));
  }, [tasks, username]);

  const addTask = (title) => {
    setTasks((prevTasks) => [...prevTasks, { title, completed: false }]);
  };

  const toggleTaskCompletion = (index) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks[index].completed = !newTasks[index].completed;
      return newTasks;
    });
  };

  const editTask = (index, newTitle) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks[index].title = newTitle;
      return newTasks;
    });
  };

  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true; // Show all
  });

  return (
    <TaskContext.Provider
      value={{ tasks: filteredTasks, addTask, toggleTaskCompletion, editTask, deleteTask, setFilter }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
