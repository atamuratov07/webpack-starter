import { useState } from 'react'

function AdminPage() {
	const [counter, setCounter] = useState(0)
	const [incrementValue, setIncrementValue] = useState(1)
	const [decrementValue, setDecrementValue] = useState(1)
	return (
		<div>
			<h1 className='text-5xl md:text-8xl lg:text-9xl text-center mt-[30vh] font-extrabold'>
				Admin Page
			</h1>

			<div className='mt-40 space-y-5 flex flex-col items-center'>
				<div className='text-4xl font-bold text-gray-700'>
					Counter: {counter}
				</div>
				<form onSubmit={e => e.preventDefault()}>
					<input
						type='number'
						defaultValue={1}
						min={1}
						onChange={e => setIncrementValue(+e.target.value)}
						className='w-full bg-gray-50 border-2 border-gray-300 text-xl font-semibold p-2.5 rounded-lg outline-none focus:ring-lime-800 focus:border-lime-800'
					/>
					<div className='flex items-center gap-5 mt-5 uppercase text-white text-2xl font-semibold'>
						<button
							type='submit'
							onClick={() => setCounter(counter + incrementValue)}
							className='bg-lime-700 w-10 h-10 flex items-center justify-center rounded-lg'
						>
							+
						</button>
						<button
							type='submit'
							onClick={() => setCounter(counter - decrementValue)}
							className='bg-lime-700 w-10 h-10 flex items-center justify-center rounded-lg'
						>
							-
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default AdminPage
