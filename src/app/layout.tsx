import { Link, Outlet } from 'react-router-dom'

export function Layout({}: {}) {
	return (
		<>
			<ul className='flex gap-x-5 items-center text-xl justify-center py-10'>
				<li>
					<Link to={'/'}>Home</Link>
				</li>
				<li>
					<Link to={'/admin'}>Admin</Link>
				</li>
			</ul>
			<Outlet />
		</>
	)
}
