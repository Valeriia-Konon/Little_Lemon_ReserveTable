import React, {useState} from "react";
import Logo from "../assets/Logo.png";
import "../styles/Nav.css";

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
          <a href="/#home" className="nav-link">Home</a>
          </li>
          <li>
            <a href="/#about" className="nav-link">About</a>
          </li>
          <li>
            <a href="/#menu" className="nav-link">Menu</a>
          </li>
          <li>
            <a href="/#testimonials" className="nav-link">Testimonials</a>
          </li>
          <li>
            <a href="/#menu" className="nav-link">Order Online</a>
          </li>
          <li>
            <a href="/#home" className="nav-link" onClick={handleLogin}>Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
