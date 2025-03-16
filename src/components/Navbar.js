import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="menu-icon" onClick={() => setOpen(!open)}>☰</div>
      <div className={`sidebar ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>✖</button>
        <Link to="/" onClick={() => setOpen(false)}>🏠 Home</Link>
        <Link to="/props" onClick={() => setOpen(false)}>📄 Props Page</Link>
        <Link to="/todo" onClick={() => setOpen(false)}>📋 Todo List</Link>
      </div>
    </div>
  );
};

export default Navbar;
