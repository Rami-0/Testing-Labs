'use client';
import React, { useState } from 'react';
import { quadraticSolver } from '../../utils/quadraticSolver';

export default function QuadraticEquationSolver() {
	const [a, setA] = useState('');
	const [b, setB] = useState('');
	const [c, setC] = useState('');
	const [result, setResult] = useState(null);
	const [error, setError] = useState(null);

	const handleSolve = () => {
		setError(null);
		setResult(null);
		try {
			const roots = quadraticSolver(Number(a), Number(b), Number(c));
			setResult(roots);
		} catch (err) {
			setError(err.message);
		}
	};

	const handleClear = () => {
		setA('');
		setB('');
		setC('');
		setResult('');
		setError('');
	};

	return (
		<section className='grid place-items-center w-dvw h-dvh'>
			<div className='text-black max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl'>
				<h1 className='text-2xl font-bold mb-4'>Quadratic Equation Solver v0.2</h1>
				<div className='mb-4'>
					<input type='number' value={a} onChange={(e) => setA(e.target.value)} className='w-full px-3 py-2 border rounded-md mb-2' placeholder='Enter coefficient a' />
					<input type='number' value={b} onChange={(e) => setB(e.target.value)} className='w-full px-3 py-2 border rounded-md mb-2' placeholder='Enter coefficient b' />
					<input type='number' value={c} onChange={(e) => setC(e.target.value)} className='w-full px-3 py-2 border rounded-md' placeholder='Enter coefficient c' />
				</div>
				<button onClick={handleClear} className='w-full my-2 px-5 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors'>
					Clear
				</button>
				<button onClick={handleSolve} className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600'>
					Solve
				</button>
				{result && (
					<div className='mt-4'>
						<p className='font-semibold'>Solutions:</p>
						{result.length === 0 && <p>No real roots (complex roots exist)</p>}
						{result.length === 1 && <p>x = {result[0].toFixed(4)}</p>}
						{result.length === 2 && (
							<>
								<p>x₁ = {result[0].toFixed(4)}</p>
								<p>x₂ = {result[1].toFixed(4)}</p>
							</>
						)}
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
