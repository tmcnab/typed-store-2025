import { ReactNode } from "react"

export interface FlexProps {
	children: ReactNode
	justify?: boolean
}

export default function Flex ({ children, justify }: FlexProps) {
	const props = {
		children,
		style: {
			alignItems: 'center',
			display: 'flex',
			gap: '1rem',
			justifyContent: justify ? 'space-between' : 'start',
		}
	}
	return <div {...props} />
}