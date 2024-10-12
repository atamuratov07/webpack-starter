import React from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import { Providers } from './provider'
import { Router } from './router'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

const root = createRoot(rootElement)

root.render(
	<React.StrictMode>
		<Providers>
			<Router />
		</Providers>
	</React.StrictMode>
)
