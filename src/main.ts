export type Nil = null | undefined;

export type IdentifierFunc = (x: unknown) => Boolean;

export function isNumber(x: unknown): x is number {
  return Number.isFinite(x);
}

export function isBigInt(x: unknown): x is BigInt {
  return typeof x === "bigint";
}

export function isString(x: unknown): x is string {
  return typeof x === "string";
}

export function isBoolean(x: unknown): x is boolean {
  return typeof x === "boolean";
}

export function isSymbol(x: unknown): x is symbol {
  return typeof x === "symbol";
}

export function isNil(x: unknown): x is Nil {
  return x === null || x === undefined;
}

export function isArray(x: unknown): x is Array<unknown> {
  return Array.isArray(x);
}

export function isObject(x: unknown): x is Object {
  return (
    x !== null &&
    typeof x === "object" &&
    (x.constructor === Object || x.constructor === undefined)
  );
}

export function isFunction(x: unknown): x is Function {
  return typeof x === "function";
}

export function isPromise(x: unknown): x is Promise<unknown> {
  return x instanceof Promise;
}

export function isError(x: unknown): x is Error {
  return x instanceof Error;
}
