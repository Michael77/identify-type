# Identify Type

<img align="right" width="160px" src="https://raw.githubusercontent.com/milne-dev/identify-type/master/logo/color.png">

[![Build Status](https://github.com/milne-dev/identify-type/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/milne-dev/identify-type/actions?query=branch%3Amaster)
[![codecov](https://codecov.io/gh/milne-dev/identify-type/branch/master/graph/badge.svg)](https://codecov.io/gh/milne-dev/identify-type)
[![NPM Version](https://img.shields.io/npm/v/identify-type)](https://www.npmjs.com/package/identify-type)

`identify-type` is a tiny JavaScript library designed to quickly identify standard types without needing to reference correct syntax.

**Key Features:**

🌲 Support ES6 **Tree-Shaking**  
✈️ Bundled **TypeScript** Definitions  
🫙 Zero Dependencies

## Rationale

There are many possible pitfalls when identifying a type in JavaScript, even when using TypeScript:

```typescript
function square(x: number): number {
  if (typeof x !== "number") {
    throw new Error("Argument 'x' must be a number");
  }
  return x * x;
}

square(2); // 4
square(NaN); // NaN (Bren, what does "NaN" mean in our financial report?)
```

Use `identify-type` to make working with JavaScript types more enjoyable.

```javascript
typeof null; // "object"
typeof []; // "object"
```

## Installation

```bash
npm i identify-type
```

### Node.js

See [Node.js docs](https://nodejs.org/api/esm.html#enabling) for importing ES modules like this one.

## Documentation

All functions accept an argument of any type and return a boolean indicating the answer to the query. If using TypeScript, types are also narrowed using type predicates.

### `isNumber`

This returns `true` for all real numbers, naturally excluding `NaN` and `Infinity`.

```javascript
isNumber(3); // true
isNumber(-27.5); // true

isNumber(NaN); // false
isNumber(Infinity); // false
```

### `isObject`

Since almost everything in JavaScript is an object, this method only returns `true` for plain objects.

```javascript
isObject({ foo: "bar" }); // true
isObject(Object.create({})); // true
isObject(Object.create(null)); // true

isObject(null); // false
isObject([]); // false
isObject(new Date()); // false
```

### `isArray`

```javascript
isArray([]); // true
isArray(new Array(1, 2, 3)); // true

isArray(new Uint8Array(32)); // false
isArray("[]"); // false
```

### `isNil`

`Nil` is an exported type that means `null` or `undefined`.

```javascript
isNil(null); // true
isNil(undefined); // true

isNil(0); // false
```

### `isError`

Returns `true` only for valid error classes.

```javascript
try {
  throw new Error("something went wrong");
} catch (e) {
  isError(e); // true
}

try {
  throw "something went wrong";
} catch (e) {
  isError(e); // false
}
```

### `isSymbol`

```javascript
isSymbol(new Symbol()); // true
isSymbol(Symbol.iterator); // true

isSymbol(☮️); // false
```

### `isBoolean`

```javascript
isBoolean(true); // true
isBoolean(false); // true

isBoolean(0); // false
isBoolean("true"); // false
isBoolean(null); // false
```

### `isBigInt`

```javascript
isBigInt(9007199254740991n); // true
isBigInt(BigInt("980928340982309482093480298349082934")); // true

isBigInt(9001); // false
```

### `isString`

```javascript
isString("foo"); // true
```

### `isPromise`

```javascript
isPromise(new Promise(() => {})); // true
```

### `isFunction`

```javascript
isFunction(() => {}); // true
isFunction(function* () {}); // true
```
