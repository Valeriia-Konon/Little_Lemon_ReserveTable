import React from "react";
import "../styles/ConfirmedBooking.css";
import { useNavigate } from "react-router-dom";

function ConfirmedBooking() {
  const navigate = useNavigate();

  return (
    <section className="confirmation-container">
      <div>
        <h2 className="confirmation-title">Reservation has been confirmed</h2>
        <p className="confirmation-text">Thank you for booking your table!</p>
        <div className="btn-submit">
          <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
      </div>
    </section>
  );
}

export default ConfirmedBooking;
