export const binarySearch = (arr, target) => {
	if (!Array.isArray(arr) || arr.length === 0) {
		throw new Error('Invalid input: array must be non-empty');
	}

	if (!arr.every((num) => typeof num === 'number')) {
		throw new Error('Invalid input: array must contain only numbers');
	}

	if (!arr.every((num, i) => i === 0 || num >= arr[i - 1])) {
		throw new Error('Invalid input: array must be sorted in ascending order');
	}

	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		if (arr[mid] === target) {
			return mid;
		} else if (arr[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return -1; // Element not found
};
