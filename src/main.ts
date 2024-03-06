export type Nil = null | undefined;

export type IdentifierFunc = (x: unknown) => Boolean;

/**
 * Checks if the input is a number.
 * @param {unknown} x - The value to check.
 * @returns {boolean} - True if the input is a number, otherwise false.
 */
export function isNumber(x: unknown): x is number {
  return Number.isFinite(x);
}

/**
 * Checks if the input is a BigInt.
 * @param {unknown} x - The value to check.
 * @returns {boolean} - True if the input is a BigInt, otherwise false.
 */
export function isBigInt(x: unknown): x is BigInt {
  return typeof x === "bigint";
}

/**
 * Checks if the input is a string.
 * @param {unknown} x - The value to check.
 * @returns {boolean} - True if the input is a string, otherwise false.
 */
export function isString(x: unknown): x is string {
  return typeof x === "string";
}

/**
 * Checks if the input is a boolean.
 * @param {unknown} x - The value to check.
 * @returns {boolean} - True if the input is a boolean, otherwise false.
 */
export function isBoolean(x: unknown): x is boolean {
  return typeof x === "boolean";
}

/**
 * Checks if the input is a symbol.
 * @param {unknown} x - The value to check.
 * @returns {boolean} - True if the input is a symbol, otherwise false.
 */
export function isSymbol(x: unknown): x is symbol {
  return typeof x === "symbol";
}

/**
 * Checks if the input is null or undefined.
 * @param {unknown} x - The value to check.
 * @returns {boolean} - True if the input is null or undefined, otherwise false.
 */
export function isNil(x: unknown): x is Nil {
  return x === null || x === undefined;
}

/**
 * Checks if the input is an array.
 * @param {unknown} x - The value to check.
 * @returns {boolean} - True if the input is an array, otherwise false.
 */
export function isArray(x: unknown): x is Array<unknown> {
  return Array.isArray(x);
}

/**
 * Checks if the input is an object.
 * @param {unknown} x - The value to check.
 * @returns {boolean} - True if the input is an object, otherwise false.
 */
export function isObject(x: unknown): x is Object {
  return (
    x !== null &&
    typeof x === "object" &&
    (x.constructor === Object || x.constructor === undefined)
  );
}

/**
 * Checks if the input is a function.
 * @param {unknown} x - The value to check.
 * @returns {boolean} - True if the input is a function, otherwise false.
 */
export function isFunction(x: unknown): x is Function {
  return typeof x === "function";
}

/**
 * Checks if the input is a Promise.
 * @param {unknown} x - The value to check.
 * @returns {boolean} - True if the input is a Promise, otherwise false.
 */
export function isPromise(x: unknown): x is Promise<unknown> {
  return x instanceof Promise;
}

/**
 * Checks if the input is an Error.
 * @param {unknown} x - The value to check.
 * @returns {boolean} - True if the input is an Error, otherwise false.
 */
export function isError(x: unknown): x is Error {
  return x instanceof Error;
}
