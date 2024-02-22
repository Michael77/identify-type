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

Use `identify-type` to make working with JavaScript more enjoyable.

```javascript
typeof null; // "object"
typeof []; // "object"
```

## Installation

```bash
npm i identify-type
```

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

## Contributing

Pull requests are welcome. For significant changes, please discuss them by opening an issue first.

Remember to update tests accordingly.
