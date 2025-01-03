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
			<Button disabled icon='grid' />
			<Button disabled icon='plus' />
			<Button disabled icon='upload' />
			<Button disabled icon='trash' />
		</Flex>
	)
}