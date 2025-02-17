import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import PricingCard from "./PricingCard";

describe("PricingCard Component", () => {
  test("renders PricingCard with correct title, subtitle, and price", () => {
    const mockSetSelected = jest.fn();
    render(
      <PricingCard
        title="Pro Plan"
        subtitle="Best for professionals"
        price={49}
        features={[
          { text: "Feature 1", enabled: true },
          { text: "Feature 2", enabled: false },
        ]}
        selected=""
        setSelected={mockSetSelected}
      />
    );

    expect(screen.getByText("Pro Plan")).toBeInTheDocument();
    expect(screen.getByText("Best for professionals")).toBeInTheDocument();
    expect(screen.getByText("$49")).toBeInTheDocument();
  });

  test("calls setSelected when 'Get Started Now' is clicked", () => {
    const mockSetSelected = jest.fn();
    render(
      <PricingCard
        title="Pro Plan"
        subtitle="Best for professionals"
        price={49}
        features={[]}
        selected=""
        setSelected={mockSetSelected}
      />
    );

    const button = screen.getByText("Get Started Now");
    fireEvent.click(button);

    expect(mockSetSelected).toHaveBeenCalledTimes(1);
    expect(mockSetSelected).toHaveBeenCalledWith("Pro Plan");
  });

  test("renders enabled and disabled features correctly", () => {
    const mockSetSelected = jest.fn();
    render(
      <PricingCard
        title="Pro Plan"
        subtitle="Best for professionals"
        price={49}
        features={[
          { text: "Feature 1", enabled: true },
          { text: "Feature 2", enabled: false },
        ]}
        selected=""
        setSelected={mockSetSelected}
      />
    );

    expect(screen.getByText("Feature 1")).toBeInTheDocument();
    expect(screen.getByText("Feature 2")).toBeInTheDocument();
  });
});