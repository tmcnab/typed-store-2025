import { RowDataType } from "./RowDataType"
import { sortBy } from 'lodash'

const N_STUDENTS = 1357

const fakeData: RowDataType[] = [{
	builtin: false,
	count: N_STUDENTS,
	name: 'student',
	size: Math.floor(Math.random() * 1024) * 1000,
}, {
	builtin: false,
	count: 5 * N_STUDENTS,
	name: 'grade',
	size: 5 * N_STUDENTS * 256,
}, {
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