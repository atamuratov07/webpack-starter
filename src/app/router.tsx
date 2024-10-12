import { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AdminPage } from '@/pages/admin'
import { HomePage } from '@/pages/home'
import { Layout } from './layout'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<HomePage />
					</Suspense>
				),
			},
			{
				path: 'admin',
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<AdminPage />
					</Suspense>
				),
			},
		],
	},
])

export function Router() {
	return <RouterProvider router={router} />
}
