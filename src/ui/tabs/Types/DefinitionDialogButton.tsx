import { first } from 'lodash'
import { TypeDefinition } from '../../../lib/TypeDefinition'
import { useState } from 'react'
import Button from '../../components/Button'
import Dialog from '../../components/Dialog'
import getStore from './getStore'

export interface DefinitionDialogButtonProps {
	name: string
}

export default function DefinitionDialogButton (props: DefinitionDialogButtonProps) {
	const [open, setOpen] = useState<boolean>(false)

	const definition = first(getStore().types().filter(i => i.name === props.name)) as TypeDefinition

	return (
		<>
			<Button icon='eye' onClick={() => setOpen(true)} />
			<Dialog onClose={() => setOpen(false)} open={open} title={`${props.name} Definition`}>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Type</th>
							<th>Nullable</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
					{definition.members.map(item => 
						<tr key={item.name}>
							<td>{item.name}</td>
							<td>{item.type}</td>
							<td>{item.nullable ? 'true' : 'false'}</td>
							<td>{item.description}</td>
						</tr>
					)}
					</tbody>
				</table>
			</Dialog>
		</>
	)
}

// description: string | null
// name: string
// nullable: boolean
// type: 'boolean' | 'numeric' | 'text' | 'uuid'