import { describe, expect, test } from "vitest";
import {
  IdentifierFunc,
  isArray,
  isBoolean,
  isNil,
  isNumber,
  isObject,
  isString,
} from "./main.js";

enum t {
  NUM = "NUM",
  NUM_ZERO = "NUM_ZERO",
  NUM_FLOAT = "NUM_FLOAT",
  NUM_NEG = "NUM_NEG",
  NUM_NOT_A = "NUM_NOT_A",

  STR = "STR",
  STR_EMPTY = "STR_EMPTY",
  STR_LIKE_NUMBER = "STR_LIKE_NUMBER",

  BOOL_TRUE = "BOOL_TRUE",
  BOOL_FALSE = "BOOL_FALSE",

  NULL = "NULL",
  UNDEFINED = "UNDEFINED",

  ARR = "ARR",
  ARR_EMPTY = "ARR_EMPTY",
  ARR_CONSTRUCTOR = "ARR_CONSTRUCTOR",

  OBJ = "OBJ",
  OBJ_EMPTY = "OBJ_EMPTY",
  OBJ_CREATE_NULL = "OBJ_CREATE_NULL",
  OBJ_CREATE = "OBJ_CREATE",
  OBJ_CLASS = "OBJ_CLASS",
}

const typeMap = new Map([
  [t.NUM, 7],
  [t.NUM_ZERO, 0],
  [t.NUM_FLOAT, 23.7],
  [t.NUM_NEG, -24],
  [t.NUM_NOT_A, NaN],

  [t.STR, "foobar"],
  [t.STR_EMPTY, ""],
  [t.STR_LIKE_NUMBER, "27"],

  [t.BOOL_TRUE, true],
  [t.BOOL_FALSE, false],

  [t.NULL, null],
  [t.UNDEFINED, undefined],

  [t.ARR, [123, 1, 2, 4, "test"]],
  [t.ARR_EMPTY, []],
  [t.ARR_CONSTRUCTOR, new Array()],

  [
    t.OBJ,
    {
      foo: "bar",
      five: 5,
    },
  ],
  [t.OBJ_EMPTY, {}],
  [t.OBJ_CREATE_NULL, Object.create(null)],
  [t.OBJ_CREATE, Object.create({})],
  [
    t.OBJ_CLASS,
    new (class Dog {
      woof() {
        console.log("woof");
      }
    })(),
  ],
]);

testIdentifierFunc(isNumber, [t.NUM, t.NUM_ZERO, t.NUM_FLOAT, t.NUM_NEG]);

testIdentifierFunc(isString, [t.STR, t.STR_EMPTY, t.STR_LIKE_NUMBER]);

testIdentifierFunc(isBoolean, [t.BOOL_TRUE, t.BOOL_FALSE]);

testIdentifierFunc(isNil, [t.NULL, t.UNDEFINED]);

testIdentifierFunc(isArray, [t.ARR, t.ARR_EMPTY, t.ARR_CONSTRUCTOR]);

testIdentifierFunc(isObject, [
  t.OBJ,
  t.OBJ_EMPTY,
  t.OBJ_CREATE,
  t.OBJ_CREATE_NULL,
  t.OBJ_CLASS,
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
