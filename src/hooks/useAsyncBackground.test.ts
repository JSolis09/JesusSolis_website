import { act, renderHook } from "@testing-library/react";
import useAsyncBackground from "./useAsyncBackground";
jest.useFakeTimers();

type ImageConstructor = new (
    width?: number | undefined,
    height?: number | undefined
  ) => HTMLImageElement;

test("should return image src", async () => {
    global.Image = class {
        onload: () => void;
        constructor() {
            this.onload = jest.fn();
            setTimeout(() => {
                this.onload();
            }, 100);
        }
    } as unknown as ImageConstructor;
    const src = "image-mock.png"
    const { result } = renderHook(() => useAsyncBackground(src));
    act(() => {
        jest.advanceTimersByTime(200);
    });
    expect(result.current).toBe(src);
});

test("should return null if there is no params", () => {
    const { result } = renderHook(() => useAsyncBackground());
    expect(result.current).toBe(null);
});
