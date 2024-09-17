import React from "react";
import { useNavigate } from "react-router-dom";
import "../navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  const isLoggedIn = !!localStorage.getItem("currentUser"); // Check if user is logged in

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Task Management</h1>
      {isLoggedIn && (
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      )}
    </nav>
  );
}

export default Navbar;
