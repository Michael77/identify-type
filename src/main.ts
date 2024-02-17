export type Nil = null | undefined;

export function isNumber(x: unknown): x is number {
  return typeof x === "number" && !isNaN(x);
}

export function isNil(x: unknown): x is Nil {
  return x === null || x === undefined;
}

export function isArray(x: unknown): x is Array<unknown> {
  return Array.isArray(x);
}

export function isObject(x: unknown): x is Object {
  return !isNil(x) && typeof x === "object" && !isArray(x);
}
