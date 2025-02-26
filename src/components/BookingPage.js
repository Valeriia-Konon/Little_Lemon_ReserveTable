import React, { useReducer } from "react";
import BookingForm from "./BookingForm";
import "../styles/BookingPage.css";

export const initializeTimes = () => {
  return [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
  ];
};
export const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    return initializeTimes();
  }
  return state;
};

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <div className="booking-form-container">
      <h1 className="booking-title">Reservations</h1>
      <p className="booking-text">
        Book your table in advance to enjoy a perfect dining experience.
      </p>
      <BookingForm
        className="booking-form"
        availableTimes={availableTimes}
        dispatch={dispatch}
      />
    </div>
  );
}

export default BookingPage;
