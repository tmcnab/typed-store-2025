export default function Collections() {
	return (
		<fieldset>
			{/* <style>
				td:first-child {
					text - align: left;
		}
				th:last-child, td:last-child {
					display: flex;
				justify-content: space-evenly;
		}
				td {
					text - align: right;
		}
			</style> */}
			<legend>Collections</legend>
			{/* <table style="padding: 0.5rem 0.5rem 0.5rem 0.5rem"> */}
			<table>
				<thead>
					<tr>
						<th rowSpan={2}>Name</th>
						<th rowSpan={2}>Count</th>
						<th colSpan={3}>Size</th>
						<th rowSpan={2}>Actions</th>
					</tr>
					<tr>
						<th>Min</th>
						<th>Avg</th>
						<th>Max</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Students</td>
						<td>547</td>
						<td>157</td>
						<td>190</td>
						<td>233</td>
						<td>
							<button>Insert</button>
							<button>Drop</button>
						</td>
					</tr>
				</tbody>
			</table>
		</fieldset>
	)
}