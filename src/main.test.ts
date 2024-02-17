import { describe, expect, it } from "vitest";
import { isArray, isNil, isNumber, isObject } from "./main";

describe("isNumber", () => {
  it("should return true for valid numbers", () => {
    expect(isNumber(5)).toBe(true);
    expect(isNumber(23.7)).toBe(true);
    expect(isNumber(-24)).toBe(true);
  });

  it("should return false for invalid numbers", () => {
    expect(isNumber(NaN)).toBe(false);
  });
});

describe("isNil", () => {
  it("should return true for null and undefined", () => {
    expect(isNil(null)).toBe(true);
    expect(isNil(undefined)).toBe(true);
  });

  it("should return false for non-nil types", () => {
    expect(isNil(true)).toBe(false);
    expect(isNil(false)).toBe(false);
    expect(isNil(NaN)).toBe(false);
    expect(isNil({})).toBe(false);
  });
});

describe("isArray", () => {
  it("should return true for arrays", () => {
    expect(isArray([])).toBe(true);
    expect(isArray(new Array())).toBe(true);
  });

  it("should return false for non-arrays", () => {
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray({})).toBe(false);
  });
});

describe("isObject", () => {
  it("should return true for objects", () => {
    expect(isObject({})).toBe(true);
    expect(isObject(Object.create({}))).toBe(true);
    expect(isObject(Object.create(null))).toBe(true);
  });

  it("should return false for non-objects", () => {
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject([])).toBe(false);
  });
});
