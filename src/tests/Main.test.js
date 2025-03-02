import { initializeTimes, updateTimes } from "../components/Main";


describe("Booking Reducer Functions", () => {
  test("initializeTimes should return the initial state with availableTimes as an array", () => {
    const initialState = initializeTimes();
    expect(initialState).toHaveProperty("availableTimes");
    expect(Array.isArray(initialState.availableTimes)).toBe(true);
    expect(initialState.availableTimes.length).toBeGreaterThan(0);
  });

  test("updateTimes should return the same state if an unknown action is passed", () => {
    const initialState = { availableTimes: ["17:00", "18:00"] };
    const action = { type: "UNKNOWN_ACTION", payload: new Date() };
    const newState = updateTimes(initialState, action);
    expect(newState).toEqual(initialState);
  });

  test("updateTimes should update availableTimes based on the selected date", () => {
    const initialState = { availableTimes: ["17:00", "18:00"] };
    const action = { type: "UPDATE_TIMES", payload: "2025-03-01" };
    const newState = updateTimes(initialState, action);

    expect(newState).toHaveProperty("availableTimes");
    expect(Array.isArray(newState.availableTimes)).toBe(true);
    expect(newState.availableTimes.length).toBeGreaterThan(0);
    expect(newState.availableTimes).not.toEqual(initialState.availableTimes);
  });
});