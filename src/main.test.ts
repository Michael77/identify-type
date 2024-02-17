import { describe, expect, test } from "vitest";
import { IdentifierFunc, isArray, isNil, isNumber, isObject } from "./main.js";

enum t {
  NUM = "NUM",
  NUM_ZERO = "NUM_ZERO",
  NUM_FLOAT = "NUM_FLOAT",
  NUM_NEG = "NUM_NEG",
  NUM_NOT_A = "NUM_NOT_A",

  NULL = "NULL",
  UNDEFINED = "UNDEFINED",

  ARR = "ARR",
  ARR_CONSTRUCTOR = "ARR_CONSTRUCTOR",

  OBJ = "OBJ",
  OBJ_CREATE_NULL = "OBJ_CREATE_NULL",
  OBJ_CREATE = "OBJ_CREATE",
}

const typeMap = new Map([
  [t.NUM, 7],
  [t.NUM_ZERO, 0],
  [t.NUM_FLOAT, 23.7],
  [t.NUM_NEG, -24],
  [t.NUM_NOT_A, NaN],

  [t.NULL, null],
  [t.UNDEFINED, undefined],

  [t.ARR, []],
  [t.ARR_CONSTRUCTOR, new Array()],

  [t.OBJ, {}],
  [t.OBJ_CREATE_NULL, Object.create(null)],
  [t.OBJ_CREATE, Object.create({})],
]);

function testIdentifierFunc(f: IdentifierFunc, successCaseKeys: Array<t>) {
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

testIdentifierFunc(isNumber, [t.NUM, t.NUM_ZERO, t.NUM_FLOAT, t.NUM_NEG]);

testIdentifierFunc(isNil, [t.NULL, t.UNDEFINED]);

testIdentifierFunc(isArray, [t.ARR, t.ARR_CONSTRUCTOR]);

testIdentifierFunc(isObject, [t.OBJ, t.OBJ_CREATE, t.OBJ_CREATE_NULL]);
