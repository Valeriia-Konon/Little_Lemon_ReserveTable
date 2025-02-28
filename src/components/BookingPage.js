import React from "react";
import BookingForm from "./BookingForm";
import "../styles/BookingPage.css";

function BookingPage(props) {
  return (
    <div className="booking-form-container">
      <h1 className="booking-title">Reservations</h1>
      <p className="booking-text">
        Book your table in advance to enjoy a perfect dining experience.
      </p>
      <BookingForm
        availableTimes={props.availableTimes}
        dispatch={props.dispatch}
        submitForm={props.submitForm}
      />
    </div>
  );
}

export default BookingPage;
