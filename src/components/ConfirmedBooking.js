import React from "react";
import "../styles/ConfirmedBooking.css";

function ConfirmedBooking() {
  return (
    <div className="confirmation-container">
      <h2 className="confirmation-title">Reservation submitted</h2>
      <p className="confirmation-text">Thank you for booking your table!</p>
    </div>
  );
}

export default ConfirmedBooking;
