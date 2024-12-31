import './style.css'
import { loadTab } from './loadTab'

window.addEventListener('hashchange', (event: HashChangeEvent) => {
	const key = event.newURL.split('/').slice(-1)[0]
	loadTab(key)
})

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll<HTMLButtonElement>('nav#tabs button').forEach(button => {
		button.onclick = () => window.location.hash = button.id
	})

	window.location.hash = '/home'
})