type TypeDefinitionMember = {
	name: string
	nullable: boolean
	type: 'boolean' | 'numeric' | 'text'
}

type TypeDefinition = {
	description?: string
	members: TypeDefinitionMember[]
	name: string
}

class TypedStore extends EventTarget
{
	#typeDefinitions: Set<TypeDefinition> = new Set<TypeDefinition>()

	addType (value: TypeDefinition) {
		console.log('TypedStore.prototype.addType', value)	// TODO: use a logger instead
		this.#typeDefinitions.add(value)					// TODO maybe clone and freeze?
	}

	types () {
		return Array.from(this.#typeDefinitions.values())
	}
}

export default Object.seal(TypedStore)