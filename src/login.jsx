import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    if (localStorage.getItem("currentUser")) {
      navigate("/task-management"); // Redirect to task management
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Username and password are required.");
      return;
    }
    const storedUser = localStorage.getItem("user");
    const storedPassword = localStorage.getItem("password");
    if (storedUser === username) {
      if (storedPassword === password) {
        localStorage.setItem("currentUser", username);
        navigate("/task-management");
      } else {
        setError("Invalid username or password.");
      }
    } else {
      // If user does not exist, create a new user
      localStorage.setItem("user", username);
      localStorage.setItem("password", password);
      localStorage.setItem("currentUser", username);
      navigate("/task-management");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleLogin}
        className="bg-white p-10 h-[350px] rounded shadow-md"
      >
        <h2 className="text-lg font-bold mb-6">Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-3 mb-5 w-full"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-3 mb-10 w-full"
          required
        />

        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
