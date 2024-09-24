import { binarySearch } from '@/app/utils/search-lab4';

describe('Binary Search', () => {
	// Partition 1: Array size
	describe('Array size partitions', () => {
		test('Single element array', () => {
			expect(binarySearch([5], 5)).toBe(0);
		});

		test('Two element array', () => {
			expect(binarySearch([1, 2], 2)).toBe(1);
		});

		test('Large array', () => {
			const arr = Array.from({ length: 1000 }, (_, i) => i * 2);
			expect(binarySearch(arr, 500)).toBe(250);
		});
	});

	// Partition 2: Target position
	describe('Target position partitions', () => {
		const arr = [1, 3, 5, 7, 9, 11, 13, 15];

		test('Target at the beginning', () => {
			expect(binarySearch(arr, 1)).toBe(0);
		});

		test('Target in the middle', () => {
			expect(binarySearch(arr, 7)).toBe(3);
		});

		test('Target at the end', () => {
			expect(binarySearch(arr, 15)).toBe(7);
		});
	});

	// Partition 3: Target not in array
	describe('Target not in array partitions', () => {
		const arr = [1, 3, 5, 7, 9];

		test('Target smaller than all elements', () => {
			expect(binarySearch(arr, 0)).toBe(-1);
		});

		test('Target between elements', () => {
			expect(binarySearch(arr, 4)).toBe(-1);
		});

		test('Target larger than all elements', () => {
			expect(binarySearch(arr, 10)).toBe(-1);
		});
	});

	// Partition 4: Invalid inputs
	describe('Invalid input partitions', () => {
		test('Empty array', () => {
			expect(() => binarySearch([], 5)).toThrow('Invalid input: array must be non-empty');
		});

		test('Unsorted array', () => {
			expect(() => binarySearch([5, 2, 8, 1], 5)).toThrow('Invalid input: array must be sorted in ascending order');
		});

		test('Array with non-numeric elements', () => {
			expect(() => binarySearch([1, 'a', 3], 2)).toThrow('Invalid input: array must contain only numbers');
		});
	});

	// Partition 5: Duplicate elements
	describe('Duplicate elements partitions', () => {
		test('Target with multiple occurrences', () => {
			expect(binarySearch([1, 2, 2, 3], 2)).toBe(1); // Should return index of first occurrence
		});
	});
});
