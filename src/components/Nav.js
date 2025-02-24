import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import "../styles/Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = () => {
    alert("Login is unavailable. We apologize for the inconvenience.");
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Little Lemon Logo" />
      </div>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <div className={`links ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li>
            {" "}
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            {" "}
            <Link to="/testimonials">Testimonials</Link>
          </li>
          <li>
            {" "}
            <Link to="/menu">Order Online</Link>
          </li>
          <li>
            <a href="/" className="nav-link" onClick={handleLogin}>
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
