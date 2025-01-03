import './Console.css'
import { FormEventHandler } from 'react'
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
					<section>
						<pre></pre>
						<textarea name="query" required rows={1}></textarea>
					</section>
				</Flex>
			</fieldset>
		</form>
	)
}