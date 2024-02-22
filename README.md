# Identify Type

[![Build Status](https://github.com/Michael77/identify-type/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/Michael77/identify-type/actions?query=branch%3Amaster)
[![codecov](https://codecov.io/gh/Michael77/identify-type/branch/master/graph/badge.svg)](https://codecov.io/gh/Michael77/identify-type)
[![NPM Version](https://img.shields.io/npm/v/identify-type)](https://www.npmjs.com/package/identify-type)

`identify-type` is a JavaScript library of utility methods designed to quickly identify standard types without the need to refer to correct syntax.

**Key Features:**

🌲 ES6 **Tree-Shaking** Support  
✈️ Bundled **TypeScript** Definitions  
🫙 Zero Dependencies

## Installation

```bash
npm i identify-type
```

## Documentation

All functions accept an argument of any type and return a boolean indicating the answer to the query. If using TypeScript, types are also narrowed using type predicates.

### `isNumber`

```javascript
isNumber(3); // true
isNumber(NaN); // false
```

## Contributing

Pull requests are welcome. For significant changes, please discuss them by opening an issue first.

Remember to update tests accordingly.
