"use strict";
Object.defineProperty(exports, "__esModule", {value: true});


function isEmpty(argWithLength) {
	errorIfNotIntegerZeroOrGreater(argWithLength.length);

	return (argWithLength.length === 0);
}
exports.isEmpty = isEmpty;


function notEmpty(argWithLength) {
	return !(isEmpty(argWithLength));
}
exports.notEmpty = notEmpty;
