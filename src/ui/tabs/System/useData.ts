import { RowDataType } from "./RowDataType"
import { sortBy } from 'lodash'

const fakeData: RowDataType[] = [{
	builtin: true,
	count: null,
	name: 'boolean',
	size: null,
}, {
	builtin: true,
	count: null,
	name: 'numeric',
	size: null,
}, {
	builtin: true,
	count: null,
	name: 'text',
	size: null,
}]

export const useData = (): RowDataType[] => {
	return sortBy(fakeData, 'name')
}