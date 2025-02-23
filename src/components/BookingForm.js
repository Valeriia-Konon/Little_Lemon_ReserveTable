import React from "react";

function BookingForm() {
  return (
    <section>
      <h1>Reservations</h1>
      <p>Book your table in advance to enjoy a perfect dining experience.</p>
      <form>
        <div id="booking">
          <input type="date" id="date" name="date"></input>
        </div>
        <div>
          <input type="time" id="time" name="time"></input>
        </div>
        <div>
          <input
            type="number"
            id="number_of_guests"
            name="number_of_guests"
          ></input>
        </div>
        <div>
          <input type="text" id="occassion" name="occassion"></input>
        </div>
        <div>
          <input type="button"></input>
        </div>
      </form>
    </section>
  );
}

export default BookingForm;
