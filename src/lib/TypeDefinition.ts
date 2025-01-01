import { Nullable } from './Nullable'
import { TypeDefinitionMember } from './TypeDefinitionMember'

export type TypeDefinition = {
	description?: Nullable<string>
	members: TypeDefinitionMember[]
	name: string
};
