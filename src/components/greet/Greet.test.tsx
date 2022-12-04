/**
 * Greet should render test hello if a name is passed into the component
 * It should render hello followed by the name
 */

import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textEl = screen.getByText(/hello/i);
    expect(textEl).toBeInTheDocument();
  });

  test("renders with name", () => {
    render(<Greet name="Pranav" />);
    const textEl = screen.getByText(/hello pranav/i);
    expect(textEl).toBeInTheDocument();
  });
});
