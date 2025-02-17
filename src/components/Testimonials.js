import React from "react";
import "../styles/Testimonials.css";
import Person from "../assets/Person.png";

const testimonials = [
  {
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
    image: Person,
  },
  {
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
    image: Person,
  },
  {
    rating: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
    image: Person,
  },
  {
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.",
    image: Person,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="title">Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={i < testimonial.rating ? "filled" : "empty"}
                >
                  &#9733;
                </span>
              ))}
            </div>
                <div className="user-icon">
                    <img src={testimonial.image} alt="Person Icon"/></div>
            <p className="text">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
