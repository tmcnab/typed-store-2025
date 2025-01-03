import { sortBy } from 'lodash'
import { TableItem } from './TableItem'
import { TypeDefinition } from '../../../lib/TypeDefinition'
import getStore from './getStore'

export function formatData(): TableItem[] {
	const types = getStore().types()

	const items = types.map<TableItem>((item: TypeDefinition) => {
		const count = getStore().size(item.name)

		return {
			builtin: !Number.isInteger(count),
			count,
			name: item.name,
		}
	})

	return sortBy(items, (item) => item.name.toLocaleLowerCase())
}
