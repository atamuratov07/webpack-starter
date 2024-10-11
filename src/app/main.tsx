import { createRoot } from 'react-dom/client'
import './global.css'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

const root = createRoot(rootElement)

root.render(<h1>Webpack | Typescript | SWC | React | Tailwind</h1>)
