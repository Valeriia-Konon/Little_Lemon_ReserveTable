import React from "react";
import "../styles/About.css";
import Interior from "../assets/Interior.png";
import Waiter from "../assets/Waiter.png";

function About() {
  return (
    <section className="little-lemon-section" id="about">
      <div className="content">
        <div className="images">
          <img
            src={Interior}
            alt="Little Lemon Interior"
            className="bottom-image"
          />
          <img
            src={Waiter}
            alt="Chef Serving Food"
            className="top-image"
          />
        </div>
        <div className="text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Nestled in the heart of the city, Little Lemon is a family-owned
            Mediterranean restaurant that brings the warmth and flavors of the
            Mediterranean to your table. Founded with a passion for fresh
            ingredients and time-honored recipes, we take pride in serving
            dishes that blend tradition with a modern twist.
          </p>
          <p>
            At Little Lemon, every meal tells a story. Our menu is inspired by
            generations of family recipes, crafted with the finest locally
            sourced ingredients and infused with the vibrant flavors of the
            Mediterranean. From zesty citrus-infused seafood to aromatic,
            slow-cooked meats and freshly baked bread, each dish is made with
            care to create a memorable dining experience.
          </p>
          <p>
            Whether you're joining us for a cozy dinner, a casual lunch, or a
            special celebration, our inviting atmosphere and warm hospitality
            make every visit feel like home. We believe that great food brings
            people together, and at Little Lemon, we welcome you as part of our
            family.
          </p>
          <p>
            Come savor the taste of tradition, reimagined for today. Welcome to
            Little Lemon – where every bite is a journey to the Mediterranean.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
