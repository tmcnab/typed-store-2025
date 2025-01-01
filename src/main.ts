import './style.css'
import { loadTab } from './loadTab'
import TypedStore from './store/TypedStore'

window.addEventListener('hashchange', (event: HashChangeEvent) => {
	const key = event.newURL.split('/').slice(-1)[0]
	loadTab(key)
})

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll<HTMLButtonElement>('nav#tabs button').forEach(button => {
		button.onclick = () => window.location.hash = button.id
	})

	window.location.hash = '/home'

	const store = window.store = new TypedStore()
	store.addType({
		members: [{
			name: 'gpa',
			nullable: false,
			type: 'numeric'
		}, {
			name: 'name',
			nullable: false,
			type: 'text',
		}, {
			name: 'suspended',
			nullable: false,
			type: 'boolean',
		}],
		name: 'Student',
		description: 'People who have grades',
	})
})