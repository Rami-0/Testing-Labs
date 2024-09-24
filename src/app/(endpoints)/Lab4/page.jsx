'use client';
import { useState } from 'react';
import { binarySearch } from '@/app/utils/search-lab4';

const BinarySearchComponent = () => {
	const [array, setArray] = useState('');
	const [target, setTarget] = useState('');
	const [result, setResult] = useState(null);
	const [error, setError] = useState('');

	const handleSearch = () => {
		setError('');
		setResult(null);

		try {
			const arr = array.split(',').map((num) => parseFloat(num.trim()));
			const targetNum = parseFloat(target);

			if (isNaN(targetNum)) {
				throw new Error('Invalid target: must be a number');
			}

			const index = binarySearch(arr, targetNum);
			setResult(index !== -1 ? `Element found at index ${index}` : 'Element not found');
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<main className='grid w-dvw h-dvh place-items-center'>
			<div className='p-4 max-w-md mx-auto'>
				<h1 className='text-2xl font-bold mb-4'>Binary Search - Lab4</h1>
				<div className='mb-4'>
					<label className='block mb-2'>Enter sorted array (comma-separated):</label>
					<input type='text' value={array} onChange={(e) => setArray(e.target.value)} className='w-full text-black p-2 border rounded' placeholder='e.g., 1, 3, 5, 7, 9' />
				</div>
				<div className='mb-4'>
					<label className='block mb-2'>Enter target value:</label>
					<input type='number' value={target} onChange={(e) => setTarget(e.target.value)} className='w-full text-black p-2 border rounded' />
				</div>
				<button onClick={handleSearch} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
					Search
				</button>
				{error && <p className='mt-4 text-red-500'>{error}</p>}
				{result && <p className='mt-4'>{result}</p>}
			</div>
		</main>
	);
};

export default BinarySearchComponent;
