import './index.css'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import Application from './ui/Application.tsx'
import TypedStore from './lib/TypedStore.ts'

window.typedStore = new TypedStore()

createRoot(document.body).render(
	<StrictMode>
		<Application />
	</StrictMode>
)
