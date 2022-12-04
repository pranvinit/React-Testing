import { renderHook, act } from "@testing-library/react"; // for testing custom hooks
import { useCounter } from "./useCounter";

describe("UseCounter", () => {
  test("should renders with a count of 0", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0); // result.current will have all current properties on the custom hook
  });

  test("should accept and render with the same initial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 10 }, // specifies initial props/arguments to the custom hook
    });

    expect(result.current.count).toBe(10); // new simple matcher
  });

  test("should increment the count", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment()); // updating state in act() wrapper

    expect(result.current.count).toBe(1);
  });

  test("should decrement the count", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement()); // updating state in act() wrapper

    expect(result.current.count).toBe(-1);
  });
});
