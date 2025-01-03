import { TypeDefinition } from '../lib/TypeDefinition'

export interface Product {
	uid: string
	name: string
}

export const ProductDefinition: TypeDefinition = {
	members: [{
		description: 'Unique Identifier',
		name: 'uid',
		nullable: false,
		type: 'uuid',
	}, {
		description: 'The name of the product',
		name: 'name',
		nullable: false,
		type: 'text',
	}],
	name: 'product',
	description: 'Something you can sell to a person',
}

export function ProductFactory () : Set<Product> {
	return new Set<Product>()
}

