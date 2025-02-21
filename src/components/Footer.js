import React from "react";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube,
  AiFillTwitterCircle,
} from "react-icons/ai";
import "../styles/Footer.css";
import LogoFooter from "../assets/LogoFooter.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src={LogoFooter} alt ="Little Lemon Logo" />
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">
            Little Lemon
          </h3>
          <ul className="footer-links">
            <li>
              <a href="/#menu">
                Menu
              </a>
            </li>
            <li>
              <a href="/#about">
                About Us
              </a>
            </li>
            <li>
              <a href="/#home">
                Login
              </a>
            </li>
            <li>
              <a href="/#menu">
                Reservations
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us:</h3>
          <p>
            648 Little Lemon Street Chicago, IL, United States
          </p>
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
