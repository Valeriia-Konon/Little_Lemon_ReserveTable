import { initializeTimes, updateTimes } from "../components/BookingPage";

describe("initializeTimes", () => {
  it("should return the expected array of available times", () => {
    const expectedTimes = [
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

    expect(initializeTimes()).toEqual(expectedTimes);
  });
});

describe("updateTimes", () => {
  it("should return the same state when an unknown action is provided", () => {
    const initialState = ["18:00", "18:30", "19:00"];
    const action = { type: "UNKNOWN_ACTION" };

    expect(updateTimes(initialState, action)).toEqual(initialState);
  });

  it("should return the initialized times when UPDATE_TIMES action is dispatched", () => {
    const initialState = ["18:00", "18:30", "19:00"];
    const action = { type: "UPDATE_TIMES" };
    const expectedTimes = initializeTimes();

    expect(updateTimes(initialState, action)).toEqual(expectedTimes);
  });
});
