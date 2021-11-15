# isEmpty(arg): boolean

Returns true if `arg.length === 0`.

# notEmpty(arg): boolean

Returns true if `arg.length !== 0`.

## Examples
```js
isEmpty([]);
// --> true

isEmpty('');
// --> true

isEmpty({length: 0});
// --> true

isEmpty({length: -1});
// --> false 

isEmpty();
// TypeError: "Cannot read property 'length' of undefined"

isEmpty(0);
// Error: "Input must have a 'length' property"

notEmpty([0]);
// --> true

notEmpty('  ');
// --> true

notEmpty({length: -1})
// --> true

notEmpty();
// TypeError: "Cannot read property 'length' of undefined"

notEmpty(1);
// Error: "Input must have a 'length' property"
```

## Installation
`npm i  @writetome51/is-empty-not-empty`

## Loading
```js
import { isEmpty, notEmpty } from '@writetome51/is-empty-not-empty';
```
