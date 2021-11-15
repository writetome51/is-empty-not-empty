import {noValue} from '@writetome51/has-value-no-value';


export const isEmpty = (argWithLength) => {
	if (noValue(argWithLength.length)) throw new Error(`Input must have a 'length' property`);
	return argWithLength.length === 0;
}

export const notEmpty = (argWithLength) => !(isEmpty(argWithLength));
