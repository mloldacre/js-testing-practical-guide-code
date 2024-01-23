import { test, it, expect } from '@jest/globals';
import { add } from '../math';

it('should sum all number values in an array', () => {
	const result = add([1, 2, 3, 4]);
	expect(result).toBe(10);
});
