import React from "react";
import { render, screen } from "@testing-library/react";
import Reviews from "../client/src/components/reviews/Reviews.jsx";

describe("Reviews Component", function () {
  it("should have a title", function () {
    render(<Reviews />);
    expect(screen.getByText("Ratings & Reviews")).toBeDefined();
  });
});