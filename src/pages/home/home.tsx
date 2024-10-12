function HomePage({}: {}) {
	return (
		<div className='w-full h-screen px-10 bg-teal-500 text-white'>
			<div className='text-center mx-auto max-w-4xl space-y-5 text-xl md:text-3xl pt-96'>
				<h1 className='text-6xl md:text-8xl font-extrabold'>
					Webpack Starter
				</h1>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Incidunt temporibus quis doloribus neque, aliquid totam minima?
					Provident rerum harum vel, ea eius magnam maiores expedita
					consectetur minus quibusdam, error voluptate?
				</p>
				<div>
					<button
						className='relative bg-white text-teal-500 px-10 py-4 rounded-lg font-bold uppercase shadow-md hover:shadow-lg shadow-white hover:shadow-white transition-shadow'
						onClick={() => alert('clicked')}
					>
						Click Me
					</button>
				</div>
			</div>
		</div>
	)
}

export default HomePage
