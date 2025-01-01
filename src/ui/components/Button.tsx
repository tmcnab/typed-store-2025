import { ReactNode } from 'react'
import FeatherIcon from 'feather-icons-react'

export interface ButtonProps {
	children?: ReactNode
	icon: string
	name?: string
	onClick?: (name: string) => void
	title?: string,
}

export default function Button ({ children, icon, name, onClick }: ButtonProps) {
	return (
		<button onClick={onClick && name ? () => onClick(name) : undefined}>
			<FeatherIcon icon={icon} />
			{children}
		</button>
	)
}