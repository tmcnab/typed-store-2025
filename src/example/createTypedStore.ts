import { ProductDefinition } from './Product'
import TypedStore from '../lib/TypedStore'

export const createTypedStore = () => {
	const store = new TypedStore()
	
	store.addType(ProductDefinition)

	return store
}