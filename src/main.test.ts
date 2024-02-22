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
  NUM,
  NUM_ZERO,
  NUM_ONE,
  NUM_FLOAT,
  NUM_NEG,
  NUM_NOT_A,
  NUM_INFINITY,

  STR,
  STR_EMPTY,
  STR_LIKE_NUMBER,
  STR_LIKE_BOOL,
  STR_LIKE_ARR,
  STR_LIKE_OBJ,

  BOOL_TRUE,
  BOOL_FALSE,

  NULL,
  UNDEFINED,

  ARR,
  ARR_EMPTY,
  ARR_CONSTRUCTOR,

  OBJ,
  OBJ_EMPTY,
  OBJ_CREATE_NULL,
  OBJ_CREATE,
  OBJ_CLASS,

  FUNC,
  FUNC_ARROW,
}

const typeMap = new Map([
  [t.NUM, 7],
  [t.NUM_ZERO, 0],
  [t.NUM_ONE, 1],
  [t.NUM_FLOAT, 23.7],
  [t.NUM_NEG, -24],
  [t.NUM_NOT_A, NaN],
  [t.NUM_INFINITY, Infinity],

  [t.STR, "foobar"],
  [t.STR_EMPTY, ""],
  [t.STR_LIKE_NUMBER, "27"],
  [t.STR_LIKE_BOOL, "true"],
  [t.STR_LIKE_ARR, "[]"],
  [t.STR_LIKE_OBJ, "{}"],

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

  [t.FUNC, function () {}],
  [t.FUNC_ARROW, () => {}],
]);

testIdentifierFunc(isNumber, [
  t.NUM,
  t.NUM_ZERO,
  t.NUM_ONE,
  t.NUM_FLOAT,
  t.NUM_NEG,
  t.NUM_INFINITY,
]);

testIdentifierFunc(isString, [
  t.STR,
  t.STR_EMPTY,
  t.STR_LIKE_NUMBER,
  t.STR_LIKE_BOOL,
  t.STR_LIKE_ARR,
  t.STR_LIKE_OBJ,
]);

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
      successCaseKeys.forEach((key) => {
        test(t[key], () => {
          expect(f(typeMap.get(key))).toBe(true);
        });
      });
    });

    describe("false cases", () => {
      typeMap.forEach((value, key) => {
        if (!successCaseKeys.includes(key)) {
          test(t[key], () => {
            expect(f(value)).toBe(false);
          });
        }
      });
    });
  });
}
