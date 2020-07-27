import {errorIfNotInteger} from 'error-if-not-integer';


export function isEmpty(argWithLength) {
	errorIfNotInteger(argWithLength.length);

	return (argWithLength.length === 0);
}


export function notEmpty(argWithLength) {
	return !(isEmpty(argWithLength));
}
