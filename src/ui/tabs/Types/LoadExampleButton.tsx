import { createTypedStore } from '../../../example/createTypedStore'
import Button from '../../components/Button'

export default function LoadExampleButton () {
	const onClick = () => {
		window.typedStore = createTypedStore()
	}

	return <Button disabled icon='coffee' onClick={onClick} title='Load Example' />
}