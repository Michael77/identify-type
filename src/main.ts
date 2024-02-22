export type Nil = null | undefined;

export type IdentifierFunc = (x: unknown) => Boolean;

export function isNumber(x: unknown): x is number {
  return Number.isFinite(x);
}

export function isString(x: unknown): x is string {
  return typeof x === "string";
}

export function isBoolean(x: unknown): x is boolean {
  return typeof x === "boolean";
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
