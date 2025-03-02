import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/BookingForm";  // Adjust path if needed

describe("BookingForm - HTML5 Validation", () => {
  test("date input has required attribute", () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} submitForm={() => {}} />);
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toBeRequired();
  });

  test("time select has required attribute", () => {
    render(<BookingForm availableTimes={["18:00"]} dispatch={() => {}} submitForm={() => {}} />);
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toBeRequired();
  });

  test("guest input has min, max, and required attributes", () => {
    render(<BookingForm availableTimes={[]} dispatch={() => {}} submitForm={() => {}} />);
    const guestInput = screen.getByLabelText(/number of guests/i);
    expect(guestInput).toBeRequired();
    expect(guestInput).toHaveAttribute("min", "1");
    expect(guestInput).toHaveAttribute("max", "10");
  });
});

describe("BookingForm - JavaScript Validation", () => {
  const validate = (data) => {
    let errors = {};
    if (!data.date) errors.date = "Date is required.";
    if (!data.time) errors.time = "Time is required.";
    if (!data.guests || data.guests < 1 || data.guests > 10)
      errors.guests = "Guests must be between 1 and 10.";
    return errors;
  };

  test("returns errors for missing fields", () => {
    const invalidData = { date: "", time: "", guests: "" };
    const errors = validate(invalidData);
    expect(errors.date).toBe("Date is required.");
    expect(errors.time).toBe("Time is required.");
    expect(errors.guests).toBe("Guests must be between 1 and 10.");
  });

  test("returns no errors for valid fields", () => {
    const validData = { date: "2025-03-10", time: "18:00", guests: "2" };
    const errors = validate(validData);
    expect(errors).toEqual({});
  });

  test("returns an error if guests are less than 1", () => {
    const data = { date: "2025-03-10", time: "18:00", guests: "0" };
    const errors = validate(data);
    expect(errors.guests).toBe("Guests must be between 1 and 10.");
  });

  test("returns an error if guests are more than 10", () => {
    const data = { date: "2025-03-10", time: "18:00", guests: "11" };
    const errors = validate(data);
    expect(errors.guests).toBe("Guests must be between 1 and 10.");
  });
});
