import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";


describe("BookingForm Component", () => {
  test("renders static text elements", () => {
    render(
      <BookingForm
        availableTimes={[]}
        dispatch={() => {}}
        submitForm={() => {}}
      />
    );

    // Check for labels
    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();

    // Check for button text
    expect(screen.getByText(/Make Your Reservation/i)).toBeInTheDocument();
  });
});
