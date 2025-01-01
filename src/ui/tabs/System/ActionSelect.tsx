import { ChangeEventHandler } from 'react'

export interface ActionSelectProps {
	onChange: (value: string) => void
}

export const ActionSelect = (props: ActionSelectProps) => {
	const onChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
		const value = event.target.value
		console.log('ActionSelect::onChange', value)
		props.onChange(value)
	}

	return (
		<select onChange={onChange} style={{ width: '100%' }}>
			<option disabled></option>
			<option disabled>
				View Definition
			</option>
			<option disabled>
				View Data
			</option>
			<option disabled>Add Record</option>
			<option disabled>Upload Records</option>
			<option disabled>Destroy Collection</option>
		</select>
	)
}