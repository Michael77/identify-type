import { describe, expect, it } from "vitest";
import { isNumber } from "./main";

describe("isNumber", () => {
  it("should return true for valid numbers", () => {
    expect(isNumber(5)).toBe(true);
  });

  it("should return false for invalid numbers", () => {
    expect(isNumber(NaN)).toBe(false);
  });
});
