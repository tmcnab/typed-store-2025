import Button from '../../components/Button'

export default function LoadExampleButton () {
	const onClick = () => {
		console.log('load it')
	}

	return <Button icon='coffee' onClick={onClick} title='Load Example' />
}