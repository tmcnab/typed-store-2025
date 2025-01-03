import './FormSection.css'
import { HTMLInputTypeAttribute } from 'react'

export interface FormSectionProps {
	label: string
	name: string
	type: HTMLInputTypeAttribute
}

export default function FormSection({ label, name, type }: FormSectionProps) {
	return (
		<section className="form-section">
			<label>{label}</label>
			<input name={name} type={type} />
		</section>
	)
}