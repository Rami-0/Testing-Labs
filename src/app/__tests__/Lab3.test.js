import { quadraticSolver } from '../utils/quadraticSolver';

describe('quadraticSolver', () => {
	test('returns two real roots', () => {
		const result = quadraticSolver(1, -5, 6);
		expect(result).toHaveLength(2);
		expect(result[0]).toBeCloseTo(3, 5);
		expect(result[1]).toBeCloseTo(2, 5);
	});

	test('returns one real root (zero solution)', () => {
		const result = quadraticSolver(1, -2, 1);
		expect(result).toHaveLength(1);
		expect(result[0]).toBeCloseTo(1, 5);
	});

	test('returns empty array for complex roots', () => {
		const result = quadraticSolver(1, 2, 5);
		expect(result).toHaveLength(0);
	});

	test('throws error when a is zero', () => {
		expect(() => quadraticSolver(0, 2, 1)).toThrow('Coefficient "a" cannot be zero');
	});

	test('throws error for non-number inputs', () => {
		expect(() => quadraticSolver('1', 2, 3)).toThrow('All coefficients must be numbers');
	});
	test('throws error for large numbers', () => {
		expect(() => quadraticSolver(1000000000000000, 0, 0)).toThrow('Invalid input. Please enter numbers between -1e10 and 1e10.');
	});
});
