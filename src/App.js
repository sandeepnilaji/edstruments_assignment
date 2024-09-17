import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./login";
import { TaskProvider } from "./context/TaskContext";
import TaskManagement from "./task-management";
import Navbar from "./components/Navbar";

function App() {
  const username = "user123";

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/task-management"
            element={
              <TaskProvider username={username}>
                <TaskManagement />
              </TaskProvider>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
