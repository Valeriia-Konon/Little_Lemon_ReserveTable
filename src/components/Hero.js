import React from 'react';
import "../styles/Hero.css";
import LandingPage from "../assets/LandingPage.jpg";

const Hero = () => {
    return (
        <div>
            <section className="hero">
                <div className="welcoming-text">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>
                        We are a family owned Mediterranean restaurant, focused on traditional
                        recipes served with a modern twist.
                    </p>
                    <button >Reserve a Table</button>
                </div>
                <div className="welcoming-picture">
                    <img
                        src={LandingPage}
                        alt="Representing Little Lemon best seller - bruschetta"
                    />
                </div>
            </section>
        </div>
    )
}

export default Hero;
