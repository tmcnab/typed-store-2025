import './Dialog.css'
import { ReactNode } from 'react'
import Button from './Button'
import Flex from './Flex'

export interface DialogProps {
	children: ReactNode
	onClose: () => void
	open: boolean
	title: string
}

export default function Dialog (props: DialogProps) {
	return (
		<dialog open={props.open}>
			<header>
				<Flex justify>
					<strong>{props.title}</strong>
					<Button icon='x' onClick={props.onClose} />
				</Flex>
			</header>
			<section>
				{props.children}
			</section>
		</dialog>
	)
}