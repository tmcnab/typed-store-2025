import './Types.css'
import { ActionSelect } from './ActionSelect'
import { TypeDefinition } from '../../../lib/TypeDefinition'
import Button from '../../components/Button'
import FeatherIcon from 'feather-icons-react'
import Flex from '../../components/Flex'
import { sortBy } from 'lodash'
import { Nullable } from '../../../lib/Nullable'
import LoadExampleButton from './LoadExampleButton'
import CreateTypeButton from './CreateType'

interface TableItem {
	builtin: boolean,
	count: Nullable<number>,
	name: string,
	size: Nullable<number>,
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
	
	const onChange = () => { /*TODO*/ }
	
	return (
		<fieldset>
			<legend>Types</legend>
			<Flex justify>
				<CreateTypeButton />
				<LoadExampleButton />
			</Flex>
			<table>
				<thead>
					<tr>
						<th>Builtin</th>
						<th>Name</th>
						<th>Count</th>
						<th>Size</th>
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
							<td>{item.builtin ? null : <ActionSelect onChange={onChange} />}</td>
						</tr>
					)}
				</tbody>
			</table>
		</fieldset>
	)
}