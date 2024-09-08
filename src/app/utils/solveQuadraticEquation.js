// Quadratic equation solver function
export function solveQuadraticEquation(a, b, c) {
	// Convert inputs to numbers and handle potential parsing errors
	a = Number(a);
	b = Number(b);
	c = Number(c);

	if (isNaN(a) || isNaN(b) || isNaN(c)) {
		return 'Invalid input. Please enter numbers.';
	}

	// Check if it's not a quadratic equation
	if (a === 0) {
		return "Not a quadratic equation. 'a' shouldn't be zero.";
	}

	const discriminant = b * b - 4 * a * c;
	const twoA = 2 * a;

	if (Math.abs(discriminant) < 1e-9) {
		// Using a small epsilon for floating-point comparison
		const x = -b / twoA;
		return `x = ${x.toFixed(4)}`; // Use fixed notation for normal results
	} else if (discriminant > 0) {
		const sqrtDiscriminant = Math.sqrt(discriminant);
		const x1 = (-b + sqrtDiscriminant) / twoA;
		const x2 = (-b - sqrtDiscriminant) / twoA;

		// Use fixed notation for normal numbers, exponential for very large/small numbers
		return `x1 = ${x1.toFixed(4)}, x2 = ${x2.toFixed(4)}`;
	} else {
		return 'No real roots';
	}
}
