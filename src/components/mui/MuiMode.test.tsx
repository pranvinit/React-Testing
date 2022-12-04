import { render, screen } from "../../test-utils"; // has custom render function that provides global context access
import { MuiMode } from "./MuiMode";

describe("MuiMode", () => {
  test("renders correctly", () => {
    // Wraps <MuiMode/> with <AppProviders/> context provider
    render(<MuiMode />); // Context Provider API
    const headingEl = screen.getByRole("heading");
    expect(headingEl).toHaveTextContent("dark mode");
  });
});
