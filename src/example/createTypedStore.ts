import { ProductDefinition } from './Product'
import TypedStore from '../lib/TypedStore'
import { PersonDefinition } from './Person'

export const createTypedStore = () => {
	const store = new TypedStore()
	
	store.addType(ProductDefinition)
	store.addType(PersonDefinition)

	return store
}