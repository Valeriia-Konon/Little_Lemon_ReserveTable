import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import "../styles/Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = () => {
    alert("Login is unavailable. We apologize for the inconvenience.");
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Little Lemon Logo" />
      </div>
      <button className="menu-toggle" onClick={() => setIsOpen(true)}>
        ☰
      </button>
      <div className={`links ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            {" "}
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about" onClick={closeMenu}>About</Link>
          </li>
          <li>
            {" "}
            <Link to="/menu" onClick={closeMenu}>Menu</Link>
          </li>
          <li>
            {" "}
            <Link to="/testimonials" onClick={closeMenu}>Testimonials</Link>
          </li>
          <li>
            {" "}
            <Link to="/menu" onClick={closeMenu}>Order Online</Link>
          </li>
          <li>
            <a href="/" className="nav-link" onClick={(e) => { handleLogin(); closeMenu(); }}>
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
