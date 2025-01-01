export const ActionSelect = () => {
	return (
		<select style={{ width: '100%' }}>
			<option>&hellip;</option>
			<option value='view-definition'>
				View Definition
			</option>
			<option value='view-data'>
				View Data
			</option>
			<option disabled>Add Record</option>
			<option disabled>Upload Records</option>
			<option disabled>Destroy Collection</option>
		</select>
	)
}