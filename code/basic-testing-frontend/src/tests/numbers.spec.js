import { test, it, expect, describe } from '@jest/globals';
import { transformToNumber } from '../util/numbers.js';
describe('Testing the number transformation function:', () => {
	it('should return a data type of Number', () => {
		const value = '1';
		const result = transformToNumber(value);
		expect(result).toEqual(expect.any(Number));
	});

	it('should return the number passed as input', () => {
		const value = '1';
		const result = transformToNumber(value);
		expect(result).toBe(+value);
	});

	it('should return as NaN if a non-number value is passed', () => {
		const value = 'A';
		const result = transformToNumber(value);
		expect(result).toBeNaN();
	});

	it('should return as NaN if string with spaces is passed', () => {
		const value = '1 2';
		const result = transformToNumber(value);
		expect(result).toBeNaN();
	});
});
