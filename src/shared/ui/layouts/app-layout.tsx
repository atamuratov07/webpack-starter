import bgImageUrl from '@/shared/assets/images/bg.png'
import { Link, Outlet } from 'react-router-dom'

export function AppLayout({}: {}) {
	if (__ENV_MODE__ === 'development') {
		console.log('secret code: 123456789abcdefg')
	}

	return (
		<div
			style={{ backgroundImage: `url(${bgImageUrl})` }}
			className='w-full min-h-screen bg-cover bg-no-repeat bg-right-bottom text-lime-800/90'
		>
			<ul className='flex gap-x-5 items-center text-2xl font-medium justify-center py-10'>
				<li>
					<Link to={'/'}>Home</Link>
				</li>
				<li>
					<Link to={'/admin'}>Admin</Link>
				</li>
			</ul>
			<Outlet />
		</div>
	)
}
