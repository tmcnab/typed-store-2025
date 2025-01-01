import './Types.css'
import { ActionSelect } from './ActionSelect'
import { useData } from './useData'
import Button from '../../components/Button'
import FeatherIcon from 'feather-icons-react'
import Flex from '../../components/Flex'

export default function Types() {
	const data = useData()

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