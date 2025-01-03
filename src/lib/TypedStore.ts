import { Nullable } from './Nullable'
import { TypeDefinition } from './TypeDefinition'

export default class TypedStore
{
	#typeDefinitions: Set<TypeDefinition> = new Set<TypeDefinition>([
		{ members: [], name: 'boolean', description: 'a true or false value' },
		{ members: [], name: 'text', description: 'zero or more characters' },
		{ members: [], name: 'uuid', description: 'a universally unique identifier' },
		{ members: [], name: 'numeric', description: 'a number between ±∞ winth arbitrary precision' },
	])

	#data: Map<string, Set<object>> = new Map<string, Set<object>>([])

	#hasType = (name: string) => {
		let found = false
		this.#typeDefinitions.forEach(item => {
			if (item.name === name) {
				found = true
			}
		})
		return found
	}

	addType (value: TypeDefinition) {
		if (!this.#hasType(value.name)) {
			this.#typeDefinitions.add(value)					// TODO maybe clone and freeze?
			this.#data.set(value.name, new Set())
		}
	}

	size (name: string) : Nullable<number> {
		const value = this.#data.get(name)?.size
		return Number.isInteger(value) ? value as number : null
	}

	types () {
		return Array.from(this.#typeDefinitions.values())
	}
}

