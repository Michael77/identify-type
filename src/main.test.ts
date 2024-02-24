import { describe, expect, test } from "vitest";
import {
  IdentifierFunc,
  isArray,
  isBigInt,
  isBoolean,
  isError,
  isFunction,
  isNil,
  isNumber,
  isObject,
  isPromise,
  isString,
  isSymbol,
} from "./main";

enum t {
  NUM,
  NUM_ZERO,
  NUM_ONE,
  NUM_FLOAT,
  NUM_NEGATIVE,
  NUM_NOT_A,
  NUM_INFINITY,

  BIGINT,
  BIGINT_LITERAL,

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
  ARR_NEW,

  OBJ,
  OBJ_EMPTY,
  OBJ_CREATE_NULL,
  OBJ_CREATE,
  OBJ_NEW,

  CLASS,

  FUNC,
  FUNC_NAMED,
  FUNC_ASYNC,
  FUNC_ARROW,
  FUNC_ARROW_ASYNC,

  DATE,

  REGEX,

  SYMBOL,

  MAP,
  MAP_WEAK,

  SET,
  SET_WEAK,

  PROMISE,

  ERROR,
}

const typeMap = new Map([
  [t.NUM, 7],
  [t.NUM_ZERO, 0],
  [t.NUM_ONE, 1],
  [t.NUM_FLOAT, 23.7],
  [t.NUM_NEGATIVE, -24],
  [t.NUM_NOT_A, NaN],
  [t.NUM_INFINITY, Infinity],

  [t.BIGINT, BigInt(980928340982309482093480298349082934)],
  [t.BIGINT_LITERAL, 9007199254740991n],

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
  [t.ARR_NEW, new Array()],

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
  [t.OBJ_NEW, new Object()],

  [
    t.CLASS,
    new (class Dog {
      woof() {
        return "arf";
      }
    })(),
  ],

  [t.FUNC, function () {}],
  [t.FUNC_NAMED, function myFunc() {}],
  [t.FUNC_ASYNC, async function () {}],
  [t.FUNC_ARROW, () => {}],
  [t.FUNC_ARROW_ASYNC, async () => {}],

  [t.DATE, new Date()],

  [t.REGEX, /ab+c/],

  [t.SYMBOL, Symbol("foo")],

  [t.MAP, new Map()],
  [t.MAP_WEAK, new WeakMap()],

  [t.SET, new Set()],
  [t.SET_WEAK, new WeakSet()],

  [t.PROMISE, new Promise(() => {})],

  [t.ERROR, new Error()],
]);

testIdentifierFunc(isNumber, [
  t.NUM,
  t.NUM_ZERO,
  t.NUM_ONE,
  t.NUM_FLOAT,
  t.NUM_NEGATIVE,
]);

testIdentifierFunc(isBigInt, [t.BIGINT, t.BIGINT_LITERAL]);

testIdentifierFunc(isString, [
  t.STR,
  t.STR_EMPTY,
  t.STR_LIKE_NUMBER,
  t.STR_LIKE_BOOL,
  t.STR_LIKE_ARR,
  t.STR_LIKE_OBJ,
]);

testIdentifierFunc(isBoolean, [t.BOOL_TRUE, t.BOOL_FALSE]);

testIdentifierFunc(isSymbol, [t.SYMBOL]);

testIdentifierFunc(isNil, [t.NULL, t.UNDEFINED]);

testIdentifierFunc(isArray, [t.ARR, t.ARR_EMPTY, t.ARR_NEW]);

testIdentifierFunc(isObject, [
  t.OBJ,
  t.OBJ_EMPTY,
  t.OBJ_CREATE,
  t.OBJ_CREATE_NULL,
  t.OBJ_NEW,
]);

testIdentifierFunc(isFunction, [
  t.FUNC,
  t.FUNC_NAMED,
  t.FUNC_ASYNC,
  t.FUNC_ARROW,
  t.FUNC_ARROW_ASYNC,
]);

testIdentifierFunc(isPromise, [t.PROMISE]);

testIdentifierFunc(isError, [t.ERROR]);

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
