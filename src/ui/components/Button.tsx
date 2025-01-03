import './Button.css'
import { ReactNode } from 'react'
import FeatherIcon from 'feather-icons-react'

export interface ButtonProps {
	children?: ReactNode
	disabled?: boolean
	icon?: string
	name?: string
	onClick?: (name?: string) => void
	title?: string,
}

export default function Button ({ children, disabled, icon, name, onClick }: ButtonProps) {
	return (
		<button disabled={disabled} onClick={onClick ? () => onClick(name) : undefined}>
			{icon ? <FeatherIcon icon={icon} /> : null}
			{children}
		</button>
	)
}