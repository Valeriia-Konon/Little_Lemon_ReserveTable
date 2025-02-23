import React, {useReducer} from "react";
import BookingForm from "./BookingForm";

const initializeTimes = () => {
    return ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];
  };
  const updateTimes = (state, action) => {
    if (action.type === "UPDATE_TIMES") {
      return initializeTimes();
    }
    return state;
  };

function BookingPage() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <div>
      <h1>Reservations</h1>
      <p>Book your table in advance to enjoy a perfect dining experience.</p>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}

export default BookingPage;
