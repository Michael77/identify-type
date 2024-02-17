import { describe, expect, test } from "vitest";
import { IdentifierFunc, isArray, isNil, isNumber, isObject } from "./main.js";

const typeMap = new Map([
  ["NUM", 7],
  ["NUM_ZERO", 0],
  ["NUM_FLOAT", 23.7],
  ["NUM_NEG", -24],
  ["NUM_NOT_A", NaN],

  ["NULL", null],
  ["UNDEFINED", undefined],

  ["ARR", []],
  ["ARR_CONSTRUCTOR", new Array()],

  ["OBJ", {}],
  ["OBJ_CREATE_NULL", Object.create(null)],
  ["OBJ_CREATE", Object.create({})],
]);

function testIdentifierFunc(f: IdentifierFunc, successCaseKeys: Array<string>) {
  describe(f.name, () => {
    describe("true cases", () => {
      successCaseKeys.forEach((tag) => {
        test(tag, () => {
          expect(f(typeMap.get(tag))).toBe(true);
        });
      });
    });

    describe("false cases", () => {
      typeMap.forEach((value, key) => {
        if (!successCaseKeys.includes(key)) {
          test(key, () => {
            expect(f(value)).toBe(false);
          });
        }
      });
    });
  });
}

testIdentifierFunc(isNumber, ["NUM", "NUM_ZERO", "NUM_FLOAT", "NUM_NEG"]);

testIdentifierFunc(isNil, ["NULL", "UNDEFINED"]);

testIdentifierFunc(isArray, ["ARR", "ARR_CONSTRUCTOR"]);

testIdentifierFunc(isObject, ["OBJ", "OBJ_CREATE", "OBJ_CREATE_NULL"]);
