import { TypeDefinition } from './TypeDefinition'

class TypedStore
{
	#typeDefinitions: Set<TypeDefinition> = new Set<TypeDefinition>([
		{ members: [], name: 'boolean', description: 'a true or false value' },
		{ members: [], name: 'text', description: 'zero or more characters' },
		{ members: [], name: 'uuid', description: 'a universally unique identifier' },
		{ members: [], name: 'numeric', description: 'a number between ±∞ winth arbitrary precision' },
	])

	addType (value: TypeDefinition) {
		console.log('TypedStore.prototype.addType', value)	// TODO: use a logger instead
		this.#typeDefinitions.add(value)					// TODO maybe clone and freeze?
	}

	types () {
		return Array.from(this.#typeDefinitions.values())
	}
}

export default Object.seal(TypedStore)