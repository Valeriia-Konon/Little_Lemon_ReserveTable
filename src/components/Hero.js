import React from "react";
import "../styles/Hero.css";
import LandingPage from "../assets/LandingPage.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="welcoming-text">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/booking">
            <button aria-label="On Click">Reserve a Table</button>
          </Link>
        </div>
        <div className="welcoming-picture">
          <img
            src={LandingPage}
            alt="Representing Little Lemon best seller - bruschetta"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
