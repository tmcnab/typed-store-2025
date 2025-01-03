import { ReactNode } from 'react'
import FeatherIcon from 'feather-icons-react'

export interface ButtonProps {
	children?: ReactNode
	icon?: string
	name?: string
	onClick?: (name?: string) => void
	title?: string,
}

const style = {
	cursor: 'pointer',
	padding: '0.25rem 0.5rem 0.25rem 0.5rem',
}

export default function Button ({ children, icon, name, onClick }: ButtonProps) {
	return (
		<button onClick={onClick ? () => onClick(name) : undefined} style={style}>
			{icon ? <FeatherIcon icon={icon} /> : null}
			{children}
		</button>
	)
}