import { test, it, expect } from '@jest/globals';
import { add } from '../math';

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
	const expectedResult = numbers.reduce((prevValue, curValue) => +prevValue + +curValue, 0);
	// *Assert
	expect(result).toBe(expectedResult);
});
