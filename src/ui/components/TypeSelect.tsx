import getStore from "../tabs/Types/getStore"

export default function TypeSelect () {
	const types: string[] = getStore().types().map(item => item.name).sort()

	return (
		<select>
			{types.map(type =>
				<option value={type}>{type}</option>
			)}
		</select>
	)
}