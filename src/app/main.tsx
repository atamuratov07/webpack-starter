import { createRoot } from 'react-dom/client'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

const root = createRoot(rootElement)

root.render(<h1>Webpack+SWC+React+Typescript</h1>)
