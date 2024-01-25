import { describe, it, expect } from '@jest/globals';
import { add } from '../math';

describe('Testing the addition function:', () => {
	it('should sum all number values in an array', () => {
		// *Arrange
		const numbers = [1, 2, 3, 4];
		const expectedResult = numbers.reduce((prevValue, curValue) => prevValue + curValue, 0);

		// *Act
		const result = add(numbers);

		// *Assert
		expect(result).toBe(expectedResult);
	});

	it('should yield NaN if at least one invalid value is provided', () => {
		// *Arrange
		const invalidInputs = ['invalid', 1];
		// *Act
		const result = add(invalidInputs);
		// *Assert
		expect(result).toBeNaN();
	});

	it('should yield a correct sum if an array of numeric string values is provided', () => {
		// *Arrange
		const textInputs = ['1', '2', '3'];
		// *Act
		const expectedResult = textInputs.reduce((prevValue, curValue) => +prevValue + +curValue, 0);
		const result = add(textInputs);
		// *Assert
		expect(result).toBe(expectedResult);
	});

	it('should yield 0 if an empty array is provided', () => {
		const numbers = [];
		const result = add(numbers);
		expect(result).toBe(0);
	});

	it('should throw an error if no value is passed', () => {
		const resultFn = () => {
			add();
		};
		expect(resultFn).toThrow();
	});

	it('it should throw an error if provided multiple arguments instead of an array', () => {
		const num1 = 1;
		const num2 = 2;

		const resultFn = () => {
			add(num1, num2);
		};

		expect(resultFn).toThrow('numbers is not iterable');
	});

	it('should throw a TypeError if provided multiple arguments instead of an array', () => {
		const num1 = 1;
		const num2 = 2;

		const resultFn = () => {
			add(num1, num2);
		};

		expect(resultFn).toThrowError(/not iterable/);
	});
});
