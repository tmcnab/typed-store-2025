import Dialog from '../../../../components/Dialog'
import Flex from '../../../../components/Flex'
import FormSection from '../../../../components/FormSection'
import TypeSelect from '../../../../components/TypeSelect'

export interface TypeDialogProps {
	open: boolean
	onClose: () => void
	typeName: string
}

export default function TypeDialog ({ onClose, open }: TypeDialogProps) {
	return (
		<Dialog onClose={onClose} open={open} title='Type Editor'>
			<form>
				<Flex vertical>
					<FormSection label='Name' name='name' type='text' />
					<FormSection label='Description' name='description' type='text' />
					<section className='form-section'>
						<label>Members</label>
						<table>
							<tbody>
								<tr>
									<td>Name</td>
									<td>
										<input />
									</td>
									<td>
										<TypeSelect />
									</td>
								</tr>
							</tbody>
						</table>
					</section>
				</Flex>
			</form>
		</Dialog>
	)
}

// description: 'Unique Identifier',
// name: 'uid',
// nullable: false,
// type: 'uuid',