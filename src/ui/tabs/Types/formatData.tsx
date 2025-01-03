import { sortBy } from 'lodash'
import { TableItem } from './TableItem'
import { TypeDefinition } from '../../../lib/TypeDefinition'
import getStore from './getStore'

export function formatData(): TableItem[] {
	const types = getStore().types()

	const items = types.map((item: TypeDefinition) => ({
		builtin: true,
		count: getStore().size(item.name),
		name: item.name,
	})) as TableItem[];

	console.log('formatData', items)

	return sortBy(items, 'name');
}
