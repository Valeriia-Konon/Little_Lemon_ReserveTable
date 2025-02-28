import React, { useState } from "react";
import "../styles/BookingForm.css";

const BookingForm = (props) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "Birthday",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted successfully", formData);
    setFormData({
      date: "",
      time: "",
      guests: "1",
      occasion: "Birthday",
    });
  };

  return (
    <form className="booking-container" onSubmit={handleSubmit}>
      <div className="date-selector">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div className="time-selector">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        >
          <option value="">Select a time</option>
          {props.availableTimes.availableTimes.map((availableTimes) => {
            return <option key={availableTimes}>{availableTimes}</option>;

          })}
        </select>
      </div>
      <div className="guest-selector">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder={1}
          min={1}
          max={10}
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          required
        />
      </div>
      <div className="occassion-selector">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occassion"
          value={formData.occasion}
          onChange={handleChange}
          required
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>
      <div className="btn-submit">
        <button
          type="submit"
          disabled={!formData.date || !formData.time || !formData.guests} aria-label="On Click"

        >
          Make Your reservation
        </button>
      </div>
    </form>
  );
}

export default BookingForm;