import user from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const headingEl = screen.getByRole("heading");
    const incrementBtnEl = screen.getByRole("button", {
      name: "Increment",
    });

    expect(headingEl).toBeInTheDocument();
    expect(incrementBtnEl).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);
    const countEl = screen.getByRole("heading");
    expect(countEl).toHaveTextContent("0");
  });

  test("renders a count of 1 after cicking the increment button", async () => {
    user.setup(); // creating instance of user-event
    render(<Counter />);
    const incrementBtnEl = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementBtnEl); // all user-event api is async
    const countEl = screen.getByRole("heading");
    expect(countEl).toHaveTextContent("1");
  });

  test("renders a count of 2 after clicking the increment button twice", async () => {
    user.setup();
    render(<Counter />);
    const incrementBtnEl = screen.getByRole("button", { name: "Increment" });
    await user.dblClick(incrementBtnEl); // all user-event api is async
    const countEl = screen.getByRole("heading");
    expect(countEl).toHaveTextContent("2");
  });

  test("renders a count of 10 after cicking the set button", async () => {
    user.setup();
    render(<Counter />);
    const amountEl = screen.getByRole("spinbutton"); // spinbutton is role for number input
    await user.type(amountEl, "10");
    expect(amountEl).toHaveValue(10); // toHaveValue asserts for the value of input field

    const setBtnEl = screen.getByRole("button", { name: "Set" });
    const countEl = screen.getByRole("heading");
    await user.click(setBtnEl);
    expect(countEl).toHaveTextContent("10");
  });

  test("elements are focused in right order", async () => {
    user.setup();
    render(<Counter />);

    const amountEl = screen.getByRole("spinbutton");
    const incrementBtnEl = screen.getByRole("button", { name: "Increment" });
    const setBtnEl = screen.getByRole("button", { name: "Set" });

    await user.tab(); // new interaction
    expect(incrementBtnEl).toHaveFocus(); // new matcher function
    await user.tab();
    expect(amountEl).toHaveFocus();
    await user.tab();
    expect(setBtnEl).toHaveFocus();
  });
});
