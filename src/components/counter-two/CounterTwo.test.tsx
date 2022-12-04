import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { CounterTwo } from "./CounterTwo";

describe("CounterTwo", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText("Counter Two");
    expect(textElement).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    user.setup();
    const incrementHandler = jest.fn(); // we ignore implementation details
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );

    const incrementBtnEl = screen.getByRole("button", { name: "Increment" });
    const decrementBtnEl = screen.getByRole("button", { name: "Decrement" });

    await user.click(incrementBtnEl);
    await user.click(decrementBtnEl);

    expect(incrementHandler).toHaveBeenCalledTimes(1); // jest provides api to assert against mock functions
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
