import './Types.css'
import { ActionSelect } from './ActionSelect'
import { TypeDefinition } from '../../../lib/TypeDefinition'
import Button from '../../components/Button'
import FeatherIcon from 'feather-icons-react'
import Flex from '../../components/Flex'
import { sortBy } from 'lodash'

interface TableItem {
	builtin: boolean,
	count: number | null,
	name: string,
	size: number | null,
}

function formatData () : TableItem[] {
	const types = window.typedStore.types()

	const items = types.map((item: TypeDefinition) => ({
		builtin: true,
		count: null,
		name: item.name,
		size: null,
	})) as TableItem[]

	return sortBy(items, 'name')
}

export default function Types() {

	const data: TableItem[] = formatData()
	
	return (
		<fieldset>
			<legend>Types</legend>
			<Flex justify>
				<Button>New Type</Button>
				<Button>Load Example</Button>
			</Flex>
			<table>
				<thead>
					<tr>
						<th>Builtin</th>
						<th>Name</th>
						<th>Count</th>
						<th>Size (B)</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item) =>
						<tr key={item.name}>
							<td>{item.builtin ? <FeatherIcon icon='check' size='16px' /> : null}</td>
							<td>{item.name}</td>
							<td>{item.count?.toLocaleString()}</td>
							<td>{item.size?.toLocaleString().replaceAll(',', ' ')}</td>
							<td>{item.builtin ? null : <ActionSelect />}</td>
						</tr>
					)}
				</tbody>
			</table>
		</fieldset>
	)
}