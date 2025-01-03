import { TypeDefinition } from '../lib/TypeDefinition'

export interface Person {
	uid: string
	name: string
}

export const PersonDefinition: TypeDefinition = {
	members: [{
		description: 'Unique Identifier',
		name: 'uid',
		nullable: false,
		type: 'uuid',
	}, {
		description: 'The name of the person',
		name: 'name',
		nullable: false,
		type: 'text',
	}],
	name: 'person',
	description: 'A human being that can buy or sell products',
}

export function PersonFactory () : Set<Person> {
	return new Set<Person>()
}

