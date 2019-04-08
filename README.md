# isEmpty(argWithLengthProperty): boolean

To be considered empty, `argWithLengthProperty.length` must be 0.

# notEmpty(argWithLengthProperty): boolean

Returns `!(isEmpty(argWithLengthProperty))`

## Examples
```ts
isEmpty([]);
// --> true

isEmpty('');
// --> true

notEmpty([0]);
// --> true

notEmpty(' ');
// --> true

notEmpty({length: false});
// Error: "Input must be a finite number of type 'number'"
// The 'input' is the length property.
```

## Installation
`npm i  @writetome51/is-empty-not-empty`

## Loading
```ts
// if using TypeScript:
import { isEmpty, notEmpty } from '@writetome51/is-empty-not-empty';
// if using ES5 JavaScript:
var isEmpty = require('@writetome51/is-empty-not-empty').isEmpty;
var notEmpty = require('@writetome51/is-empty-not-empty').notEmpty;
```
