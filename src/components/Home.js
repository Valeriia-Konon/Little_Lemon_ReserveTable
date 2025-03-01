import React from "react";
import Hero from "./Hero";
import Menu from "./Menu";
import Testimonials from "./Testimonials";
import About from "./About";

const Home = () => {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>

      <section id="menu">
        <Menu />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="about">
        <About />
      </section>
    </div>
  );
}

export default Home;
