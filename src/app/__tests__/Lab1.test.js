import { solveQuadraticEquation } from '../utils/solveQuadraticEquation';

describe('Quadratic Equation Solver', () => {
	test('Two distinct real roots', () => {
		expect(solveQuadraticEquation(1, -5, 6)).toBe('x1 = 3.0000, x2 = 2.0000');
	});

	test('One real root (discriminant = 0)', () => {
		expect(solveQuadraticEquation(1, 2, 1)).toBe('x = -1.0000');
	});

	test('Complex roots', () => {
		expect(solveQuadraticEquation(1, 0, 1)).toBe('No real roots');
	});

	test('Invalid equation (a = 0, b = 0)', () => {
		expect(solveQuadraticEquation(0, 0, 1)).toBe("Not a quadratic equation. 'a' shouldn't be zero.");
	});

	test('One root at x = 0', () => {
		expect(solveQuadraticEquation(1, 0, 0)).toBe('x = 0.0000');
	});

	test("Negative 'a' coefficient", () => {
		expect(solveQuadraticEquation(-1, 0, 4)).toBe('x1 = -2.0000, x2 = 2.0000');
	});

	test('Decimal coefficients', () => {
		expect(solveQuadraticEquation(0.5, 1, 0.5)).toBe('x = -1.0000');
	});

	test('Large coefficients', () => {
		expect(solveQuadraticEquation(100, 2000, 10000)).toBe('x = -10.0000');
	});

	test("Very small 'a' coefficient", () => {
		const result = solveQuadraticEquation(1e-10, 1, 1);
		expect(result).toMatch('x1 = -1.0000, x2 = -9999999999.0000');
	});
});
