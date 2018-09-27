# axe-selector

> The `getSelector` method from `axe-core` 2.x as a standalone package.

The CSS selectors generated by this package are designed to be easy accurate, unique, and easy for humans to read/comprehend.

## Installation

With `npm`, do:

```
$ npm install --save axe-selector
```

## Usage Example

```js
import getSelector from 'axe-selector'

const el = getDOMElementSomehow()

// Generate a selector.
const selector = getSelector(el)
```

## License

MPL-2.0
