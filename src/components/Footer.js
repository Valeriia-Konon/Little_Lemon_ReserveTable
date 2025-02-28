import React from "react";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube,
  AiFillTwitterCircle,
} from "react-icons/ai";
import "../styles/Footer.css";
import LogoFooter from "../assets/LogoFooter.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src={LogoFooter} alt="Little Lemon Logo" />
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Little Lemon</h3>
          <ul className="footer-links">
            <li>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
            </li>
            <li>
              <Link to='/about' onClick={() => window.scrollTo(0, 0)}>About Us</Link>
            </li>
            <li>
              <Link to='/login' onClick={() => window.scrollTo(0, 0)}>Login</Link>
            </li>
            <li>
              <Link to='/booking' onClick={() => window.scrollTo(0, 0)}>Reservations</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us:</h3>
          <p>648 Little Lemon Street Chicago, IL, United States</p>
          <p>+1 123-456-7890</p>
          <address>little.lemon@restaurant.com</address>
          <div className="footer-socials">
            <a href="/">
              <AiFillInstagram />
            </a>
            <a href="/">
              <AiFillFacebook />
            </a>
            <a href="/">
              <AiFillYoutube />
            </a>
            <a href="/">
              <AiFillTwitterCircle />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Little Lemon. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
