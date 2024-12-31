import collections from './tabs/collections.html?raw'
import documentation from './tabs/documentation.html?raw'
import home from './tabs/home.html?raw'
import newSession from './tabs/new-session.html?raw'

const tabs = new Map<string, string>([
	['collections', collections],
	['documentation', documentation],
	['home', home],
	['new-session', newSession],
])

export const loadTab = (key: string) => {
	const innerHTML = tabs.get(key)
	const element = document.querySelector('main')
	
	if (element && innerHTML) {
		element.innerHTML = innerHTML
	}
}