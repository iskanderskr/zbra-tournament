import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import AddCandidate from '../'

describe('<AddCandidate />', () => {
	it('Validate inputs', () => {
		render(
			<AddCandidate
				openedModal={true}
				listCandidates={[]}
				initialValues={undefined}
				setListCandidate={(): void => {
					;('')
				}}
				setOpenedModal={(): void => {
					;('')
				}}
			/>
		)

		expect(screen.getByLabelText('Nome')).toBeInTheDocument()
		expect(screen.getByLabelText('Telefone')).toBeInTheDocument()
		expect(screen.getByLabelText('E-mail')).toBeInTheDocument()
	})

	it('Validade change', () => {
		const mockValues = {
			id: 'idCandidato 1',
			name: 'Nome do candidato 1',
			tel: '(11) 99999-9999',
			email: 'nome_1@test.com',
			color: {
				hex: '#f0f0f0'
			},
			power: 18
		}

		render(
			<AddCandidate
				openedModal={true}
				listCandidates={[]}
				initialValues={mockValues}
				setListCandidate={(): void => {
					;('')
				}}
				setOpenedModal={(): void => {
					;('')
				}}
			/>
		)

		expect(screen.getByRole('textbox', { name: 'Nome' })).toHaveValue(
			'Nome do candidato 1'
		)
		expect(screen.getByRole('textbox', { name: 'Telefone' })).toHaveValue(
			'(11) 99999-9999'
		)
		expect(screen.getByRole('textbox', { name: 'E-mail' })).toHaveValue(
			'nome_1@test.com'
		)
	})
})
