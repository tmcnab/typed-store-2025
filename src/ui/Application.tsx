import { useMemo, useState } from 'react'
import Button from './components/Button'
import Console from './tabs/Console/Console'
import Documentation from './tabs/Documentation'
import Flex from './components/Flex'
import Home from './tabs/Home'
import Types from './tabs/System/Types'

const lookup = new Map([
	['console', Console],
	['documentation', Documentation],
	['home', Home],
	['system', Types],
])

export default function Application() {
	const [tab, setTab] = useState('home')
	const [children, setChildren] = useState(Home)

	useMemo(() => {
		setChildren(lookup.get(tab)!)
	}, [setChildren, tab])

	const onClick = (name: string) => {
		setTab(name)
	}

	return (
		<>
			<Flex justify>
				<h1>TypedStore (2025)</h1>
				<Flex>
					<Button icon='home' name='home' onClick={onClick} title='Home' />
					<Button icon='book' name='documentation' onClick={onClick} title='Documentation' />
					<Button icon='database' name='system' onClick={onClick} title='System' />
					<Button icon='terminal' name='console' onClick={onClick} title='Console' />
					<Button icon='github'>
						<a href='https://github.com/tmcnab/typed-store' title='GitHub Repository' />
					</Button>
				</Flex>
			</Flex>
			<main>
				{children}
			</main>
		</>
	)
}
