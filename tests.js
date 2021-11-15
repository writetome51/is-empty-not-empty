import {isEmpty, notEmpty} from './index.js';


if (isEmpty([])) console.log('test 1 passed');
else console.log('test 1 FAILED');


if (isEmpty('')) console.log('test 2 passed');
else console.log('test 2 FAILED');


if (isEmpty({length: 0})) console.log('test 2A passed');
else console.log('test 2A FAILED');


if (notEmpty([0])) console.log('test 3 passed');
else console.log('test 3 FAILED');


if (notEmpty('  ')) console.log('test 4 passed');
else console.log('test 4 FAILED');


if (notEmpty({length: -1})) console.log('test 4A passed');
else console.log('test 4A FAILED');


// Argument must have a defined 'length' property:
let errorTriggered = false;
try {
	notEmpty({});
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5 passed');
else console.log('test 5 FAILED');


errorTriggered = false;
try {
	let obj = {prop: 1, length: undefined};
	notEmpty(obj);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 FAILED');


errorTriggered = false;
try {
	notEmpty(10);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 7 passed');
else console.log('test 7 FAILED');


errorTriggered = false;
try {
	notEmpty(0);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 8 passed');
else console.log('test 8 FAILED');

