import { fibonacci } from '../utils/fibonacci';

describe('fibonacci', () => {
	test('returns correct value for 0', () => {
		expect(fibonacci(0)).toBe(0);
	});

	test('returns correct value for 1', () => {
		expect(fibonacci(1)).toBe(1);
	});

	test('returns correct value for 5', () => {
		expect(fibonacci(5)).toBe(5);
	});

	test('returns correct value for 10', () => {
		expect(fibonacci(10)).toBe(55);
	});

	test('returns correct value for 20', () => {
		expect(fibonacci(20)).toBe(6765);
	});

	test('returns correct value for 78 (highest safe integer)', () => {
		expect(fibonacci(78)).toBe(8944394323791464);
	});

	test('throws error for negative number', () => {
		expect(() => fibonacci(-1)).toThrow('Input must be a non-negative number');
	});

	test('throws error for decimal number', () => {
		expect(() => fibonacci(3.5)).toThrow('Input must be an integer');
	});

	test('throws error for non-number input', () => {
		expect(() => fibonacci('5')).toThrow('Input must be a number');
	});

	test('throws error for NaN', () => {
		expect(() => fibonacci(NaN)).toThrow('Input must be a number');
	});

	test('throws error for number larger than 78', () => {
		expect(() => fibonacci(79)).toThrow('Input is too large, may cause integer overflow');
	});
});
