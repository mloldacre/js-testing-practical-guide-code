import { cleanNumbers } from './util/numbers.js';
import { convertToString } from './util/validation.js';

export function add(numbers) {
	let sum = 0;

	for (const number of numbers) {
		sum += +number;
	}
	return sum;
}

export function calculateResult(numberValues) {
	let result = '';
	try {
		const numbers = cleanNumbers(numberValues);
		result = add(numbers).toString();
		//result = convertToString(add(numbers));
	} catch (error) {
		result = error.message;
	}
}
