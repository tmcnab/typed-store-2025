import { useMemo, useState } from 'react'
import Collections from './Collections'
import Console from './Console'
import Documentation from './Documentation'
import FeatherIcon from 'feather-icons-react'
import Flex from './Flex'
import Home from './Home'
import Button from './Button'

const lookup = new Map([
	['collections', Collections],
	['console', Console],
	['documentation', Documentation],
	['home', Home],
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
					<Button icon='database' name='collections' onClick={onClick} title='Collections' />
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
