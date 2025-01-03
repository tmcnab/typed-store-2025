import Button from '../../components/Button'

export default function CreateTypeButton () {
	const onClick = () => {
		console.log('create it')
	}

	return <Button icon='plus' onClick={onClick} title='Create Type' />
}