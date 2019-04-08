"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var eIfNZOG = require('error-if-not-integer-zero-or-greater');


function isEmpty(argWithLength) {

	eIfNZOG.errorIfNotIntegerZeroOrGreater(argWithLength.length);

	return (argWithLength.length === 0);
}
exports.isEmpty = isEmpty;


function notEmpty(argWithLength) {
	return !(isEmpty(argWithLength));
}
exports.notEmpty = notEmpty;
