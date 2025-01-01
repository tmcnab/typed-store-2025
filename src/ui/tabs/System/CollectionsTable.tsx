import './CollectionsTable.css'

export default function CollectionsTable() {
	return (
		<table>
			<caption>Collections</caption>
			<thead>
				<tr>
					<th>Name</th>
					<th>Count</th>
					<th>Size</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Students</td>
					<td>547</td>
					<td>45.7 KiB</td>
					<td style={{ border: 0, padding: 0 }}>
						<select style={{ width: '100%' }}>
							<option>Choose &hellip;</option>
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
					</td>
				</tr>
			</tbody>
		</table>
	)
}