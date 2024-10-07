import { describe, it, expect } from "vitest";
import { useIncrement } from "../src/hooks/useIncrement.js";
import { act, renderHook } from "@testing-library/react";

describe("useIncrement", () => {
  it("shoud use the default value", () => {
    const { result } = renderHook(() => useIncrement({ base: 5 }));

    expect(result.current.count).toBe(5);
  });
  it("shoud increment value", () => {
    const { result } = renderHook(() => useIncrement({ base: 5 }))
    act(() => result.current.increment())
    result.current.increment()

    expect(result.current.count).toBe(6);
  });
  it("should not bypass max", () => {
    const { result } = renderHook(() => useIncrement({ base: 5, max: 7 }))
    act(() => result.current.increment())
    result.current.increment()

    expect(result.current.count).toBe(6);
    act(() => result.current.increment())
    act(() => result.current.increment())
    act(() => result.current.increment())
    act(() => result.current.increment())
    expect(result.current.count).toBe(7)
  });
});
