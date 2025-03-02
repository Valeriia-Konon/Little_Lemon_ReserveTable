import React, { useReducer, useEffect } from "react";
import BookingPage from "./BookingPage";

const seedRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 1185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = function (date) {
  let result = [];
  let random = seedRandom(date.getDate());
  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() > 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};

export function initializeTimes() {
  const storedTimes = localStorage.getItem("availableTimes");
  return storedTimes
    ? JSON.parse(storedTimes)
    : { availableTimes: fetchAPI(new Date()) };
}

export function updateTimes(state, action) {
  if (action.type === "UPDATE_TIMES") {
    const newTimes = { availableTimes: fetchAPI(new Date(action.payload)) };
    localStorage.setItem("availableTimes", JSON.stringify(newTimes));
    return newTimes;
  }
  return state;
}

function Main() {
  const [state, dispatch] = useReducer(updateTimes, {}, initializeTimes);

  function submitForm(formData) {
    localStorage.removeItem("availableTimes");
    window.location.href = "/bookingconfirmation";
  }

  useEffect(() => {
    localStorage.setItem("availableTimes", JSON.stringify(state));
  }, [state]);

  return (
    <main>
      <BookingPage
        availableTimes={state.availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </main>
  );
}

export default Main;
