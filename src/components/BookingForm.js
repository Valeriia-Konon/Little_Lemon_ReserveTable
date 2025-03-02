import React, { useState } from "react";
import "../styles/BookingForm.css";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "Birthday",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = (data) => {
    let newErrors = {};
    if (!data.date) newErrors.date = "Date is required.";
    if (!data.time) newErrors.time = "Time is required.";
    if (!data.guests || data.guests < 1 || data.guests > 10)
      newErrors.guests = "Guests must be between 1 and 10.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "date") {
      dispatch({ type: "UPDATE_TIMES", payload: new Date(value) });
    }
    setErrors(validate({ ...formData, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(formData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ date: true, time: true, guests: true });

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully", formData);
      submitForm(formData);
      window.location.href = "/bookingconfirmation";
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form className="booking-container" onSubmit={handleSubmit} noValidate>
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
        {touched.date && errors.date && <p className="error">{errors.date}</p>}
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
          {availableTimes.map((time) => {
            return <option key={time}>{time}</option>;
          })}
        </select>
        {touched.date && errors.time && <p className="error">{errors.time}</p>}
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
          onBlur={handleBlur}
          required
        />
        {touched.date && errors.guests && <p className="error">{errors.guests}</p>}
      </div>
      <div>
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
          disabled={!formData.date || !formData.time || !formData.guests}
          aria-label="On Click"
        >
          Make Your reservation
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
