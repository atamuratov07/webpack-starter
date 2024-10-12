import { AdminPage } from '@/pages/admin'
import { HomePage } from '@/pages/home'
import { AppLayout } from '@/shared/ui/layouts/app-layout'
import { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
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
