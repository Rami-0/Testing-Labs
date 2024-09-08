export function fibonacci(n) {
  // Handle edge cases
  if (typeof n !== 'number' || isNaN(n)) {
    throw new Error('Input must be a number');
  }
  if (n < 0) {
    throw new Error('Input must be a non-negative number');
  }
  if (!Number.isInteger(n)) {
    throw new Error('Input must be an integer');
  }
  if (n > 78) {
    throw new Error('Input is too large, may cause integer overflow');
  }

  if (n <= 1) return n;
  let a = 0n, b = 1n;
  for (let i = 2; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return Number(b);
}
