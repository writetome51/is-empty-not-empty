import {errorIfNotFiniteNumber} from 'error-if-not-finite-number';


export function isEmpty(argWithLength) {
	errorIfNotFiniteNumber(argWithLength.length);

	return (argWithLength.length === 0);
}


export function notEmpty(argWithLength) {
	return !(isEmpty(argWithLength));
}
