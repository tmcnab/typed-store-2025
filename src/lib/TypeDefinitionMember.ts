export type TypeDefinitionMember = {
	description: string | null
	name: string
	nullable: boolean
	type: 'boolean' | 'numeric' | 'text'
}
