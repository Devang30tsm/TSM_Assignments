import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";
import "@testing-library/jest-dom";

describe("Counter Component", () => {
  test("Initial count is 0", () => {
    render(<Counter />);
    const countValue = screen.getByText("0");
    expect(countValue).toBeInTheDocument();
  });

  test("Clicking + increments the count", () => {
    render(<Counter />);
    const incrementBtn = screen.getByText("+");
    fireEvent.click(incrementBtn);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("Clicking – decrements the count", () => {
    render(<Counter />);
    const decrementBtn = screen.getByText("–");
    fireEvent.click(decrementBtn);
    expect(screen.getByText("-1")).toBeInTheDocument();
  });

  test("Clicking reset sets the count back to 0", () => {
    render(<Counter />);
    const incrementBtn = screen.getByText("+");
    const resetBtn = screen.getByText(/reset/i);

    fireEvent.click(incrementBtn); // count = 1
    fireEvent.click(resetBtn);
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
