'use client';
import React, { useState } from 'react';
import { fibonacci } from '../utils/fibonacci';

export default function FibonacciCalculator() {
	const [input, setInput] = useState('');
	const [result, setResult] = useState(null);
	const [error, setError] = useState(null);

	const handleCalculate = () => {
		setError(null);
		try {
			const n = Number(input);
			const fibResult = fibonacci(n);
			setResult(fibResult);
		} catch (err) {
			setError(err.message);
			setResult(null);
		}
	};

	return (
		<section className='w-dvw h-dvh grid place-items-center'>
			<div className='text-black max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl'>
				<h1 className='text-2xl font-bold mb-4'>Fibonacci Calculator</h1>
				<div className='mb-4'>
					<input type='number' value={input} onChange={(e) => setInput(e.target.value)} className='w-full px-3 py-2 border rounded-md' placeholder='Enter a number (0-78)' />
				</div>
				<button onClick={handleCalculate} className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600'>
					Calculate
				</button>
				{result !== null && (
					<div className='mt-4'>
						<p className='font-semibold'>Result: {result}</p>
					</div>
				)}
				{error && (
					<div className='mt-4'>
						<p className='text-red-500 font-semibold'>Error: {error}</p>
					</div>
				)}
			</div>
		</section>
	);
}
