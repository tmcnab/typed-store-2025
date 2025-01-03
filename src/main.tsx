import './index.css'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import Application from './ui/Application.tsx'
import { createTypedStore } from './example/createTypedStore.ts'

window.typedStore = createTypedStore()

createRoot(document.body).render(
	<StrictMode>
		<Application />
	</StrictMode>
)
