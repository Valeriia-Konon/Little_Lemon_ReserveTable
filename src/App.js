import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <Menu />
      <Testimonials />
      <About />
      <Footer />
      <Login />
    </div>
  );
}

export default App;
