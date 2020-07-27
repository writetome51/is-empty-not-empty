# isEmpty(arg): boolean

Returns true if `arg.length === 0`.

# notEmpty(arg): boolean

Returns true if `arg.length > 0`.

## Examples
```js
isEmpty([]);
// --> true

isEmpty('');
// --> true

isEmpty({length: 0});
// --> true

notEmpty([0]);
// --> true
```

## Installation
`npm i  @writetome51/is-empty-not-empty`

## Loading
```js
import { isEmpty, notEmpty } from '@writetome51/is-empty-not-empty';
```
