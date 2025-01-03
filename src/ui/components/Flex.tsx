import { ReactNode } from "react"

export interface FlexProps {
	alignTop?: boolean
	children: ReactNode
	justify?: boolean
	vertical?: boolean
}

export default function Flex ({ alignTop, children, justify, vertical }: FlexProps) {
	const props = {
		children,
		style: {
			alignItems: alignTop ? 'top' : 'center',
			display: 'flex',
			flexDirection: vertical ? 'column' : undefined,
			gap: '0.5rem',
			justifyContent: justify ? 'space-between' : undefined,
		}
	}
	return <div {...props} />
}