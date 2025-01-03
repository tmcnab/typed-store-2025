import Button from '../../components/Button'
import DefinitionDialogButton from './DefinitionDialogButton'
import Flex from '../../components/Flex'

export interface ActionSelectProps {
	name: string
}

export const ActionSelect = (props: ActionSelectProps) => 
{
	return (
		<Flex>
			<DefinitionDialogButton name={props.name} />
			<Button icon='grid' />
			<Button icon='plus' />
			<Button icon='upload' />
			<Button icon='trash' />
		</Flex>
	)
}