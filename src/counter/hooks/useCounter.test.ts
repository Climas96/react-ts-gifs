import { describe, test, expect } from "vitest";
import { useCounter } from "./useCounter";
import { renderHook } from "@testing-library/react";
import { act } from "react";

describe("useCounter", () => {
  test("should initialize with default value of 10", () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.counter).toBe(10);
  });

  test("should initialize with value 20", () => {
    const initialValue = 20;
    const { result } = renderHook(() => useCounter(initialValue));
    expect(result.current.counter).toBe(20);
  });

  test("should increment counter when handleAdd is called", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleAdd();
    });

    expect(result.current.counter).toBe(11);
  });

  test("should decrement counter when handleSustract is called", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleSubtract();
    });

    expect(result.current.counter).toBe(9);
  });

  test("should reset counter when handleReset is called", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleAdd();
    });

    act(() => {
      result.current.handleSubtract();
    });

    act(() => {
      result.current.handleSubtract();
    });

    act(() => {
      result.current.handleReset();
    });

    expect(result.current.counter).toBe(10);
  });
});
