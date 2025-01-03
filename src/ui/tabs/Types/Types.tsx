import './Types.css'
import { ActionSelect } from './ActionSelect'
import { formatData } from './formatData'
import { TableItem } from './TableItem'
import CreateTypeButton from './CreateType'
import DefinitionDialogButton from './DefinitionDialogButton'
import FeatherIcon from 'feather-icons-react'
import Flex from '../../components/Flex'
import LoadExampleButton from './LoadExampleButton'

export default function Types()
{
	const data: TableItem[] = formatData()
	
	const onChange = (value) => { 
		console.log('Types::onChange', value)

	 }
	
	return (
		<>
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
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item) =>
							<tr key={item.name}>
								<td>{item.builtin ? <FeatherIcon icon='check' size='16px' /> : null}</td>
								<td>{item.name}</td>
								<td>{item.count}</td>
								<td>{item.builtin ? null : <ActionSelect name={item.name} onChange={onChange} />}</td>
							</tr>
						)}
					</tbody>
				</table>
			</fieldset>
		</>
	)
}