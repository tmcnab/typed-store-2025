import './Console.css'
import { FormEventHandler } from 'react'
import Button from "../../components/Button"
import Flex from "../../components/Flex"

export default function Console() {
	const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault()
		console.log('Console::onSubmit', event.currentTarget.name)
	}

	return (
		<form autoComplete='off' onSubmit={onSubmit}>
			<fieldset>
				<legend>Console</legend>
				<Flex vertical>
					<textarea name="query" required rows={4}></textarea>
					<Button>Execute</Button>
				</Flex>
			</fieldset>
		</form>
	)
}