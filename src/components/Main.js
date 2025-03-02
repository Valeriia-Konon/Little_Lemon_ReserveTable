import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
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

function initializeTimes() {
  return { availableTimes: fetchAPI(new Date()) };
}

const submitAPI = function (formData) {
  return true;
};

function updateTimes(state, action) {
  if (action.type === "UPDATE_TIMES") {
    return { availableTimes: fetchAPI(new Date(action.payload)) };
  }
  return state;
}

function Main() {
  const [state, dispatch] = useReducer(updateTimes, {}, initializeTimes);

  const navigate = useNavigate();

  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/bookingconfirmation");
    }
  }

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
