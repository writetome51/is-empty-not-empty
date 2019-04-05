"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var isEmpty_notEmpty_1 = require("./index");


if (isEmpty_notEmpty_1.isEmpty([]))
	console.log('test 1 passed');
else
	console.log('test 1 FAILED');


if (isEmpty_notEmpty_1.isEmpty(''))
	console.log('test 2 passed');
else
	console.log('test 2 FAILED');


if (isEmpty_notEmpty_1.notEmpty([0]))
	console.log('test 3 passed');
else
	console.log('test 3 FAILED');


if (isEmpty_notEmpty_1.notEmpty('  '))
	console.log('test 4 passed');
else
	console.log('test 4 FAILED');


if (isEmpty_notEmpty_1.notEmpty({length: false}))
	console.log('test 4 passed');
else
	console.log('test 4 FAILED');


// Argument must have a defined 'length' property:
let errorTriggered = false;
try {
	isEmpty_notEmpty_1.notEmpty({});
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5 passed');
else console.log('test 5 FAILED');


errorTriggered = false;
try {
	let obj = {prop: 1, length: undefined};
	isEmpty_notEmpty_1.notEmpty(obj);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 FAILED');


errorTriggered = false;
try {
	isEmpty_notEmpty_1.notEmpty(10);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 7 passed');
else console.log('test 7 FAILED');
