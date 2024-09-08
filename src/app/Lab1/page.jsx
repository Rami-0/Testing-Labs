'use client';
import React, { useState } from 'react';
import { solveQuadraticEquation } from '@/app/utils/solveQuadraticEquation';

export default function Lab1() {
	const [a, setA] = useState('');
	const [b, setB] = useState('');
	const [c, setC] = useState('');
	const [result, setResult] = useState('');

	const handleSolve = () => {
		const solution = solveQuadraticEquation(a, b, c);
		setResult(solution);
	};

	const handleClear = () => {
		setA('');
		setB('');
		setC('');
		setResult('');
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			handleSolve();
		}
	};

	return (
		<section className='grid place-items-center h-dvh w-dvw'>
			<div className='bg-white rounded-lg text-black flex flex-col items-center p-5 font-sans'>
				<h1 className='text-2xl font-bold mb-5'>Quadratic Equation Solver</h1>
				<input type='number' value={a} onChange={(e) => setA(e.target.value)} onKeyDown={handleKeyDown} placeholder='Enter a' className='w-52 h-10 mb-3 px-2 border border-gray-300 rounded text-black' />
				<input type='number' value={b} onChange={(e) => setB(e.target.value)} onKeyDown={handleKeyDown} placeholder='Enter b' className='w-52 h-10 mb-3 px-2 border border-gray-300 rounded text-black' />
				<input type='number' value={c} onChange={(e) => setC(e.target.value)} onKeyDown={handleKeyDown} placeholder='Enter c' className='w-52 h-10 mb-3 px-2 border border-gray-300 rounded text-black' />
				<div className='flex justify-between w-full'>
					<button onClick={handleClear} className='px-5 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors'>
						Clear
					</button>
					<button onClick={handleSolve} className='px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors'>
						Solve
					</button>
				</div>
				<p className='mt-5 text-lg'>{result}</p>
			</div>
		</section>
	);
}
