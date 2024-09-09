export function quadraticSolver(a, b, c) {
	if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
		throw new Error('All coefficients must be numbers');
	}

	const LIMIT = 1e10;
	const NEG_LIMIT = -LIMIT;

	if (a > LIMIT || a < NEG_LIMIT || b > LIMIT || b < NEG_LIMIT || c > LIMIT || c < NEG_LIMIT) {
		throw new Error('Invalid input. Please enter numbers between -1e10 and 1e10.');
	}

	if (a === 0) {
		throw new Error('Coefficient "a" cannot be zero');
	}

	const discriminant = b * b - 4 * a * c;

	if (discriminant > 0) {
		const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		return [root1, root2];
	} else if (discriminant === 0) {
		const root = -b / (2 * a);
		return [root];
	} else {
		return [];
	}
}
