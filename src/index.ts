import { Nil } from "./types";

export function isNumber(x: unknown): x is number {
  return typeof x === "number" && !isNaN(x);
}

export function isNil(x: unknown): x is Nil {
  return x === null || x === undefined;
}
