import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Candidate from '..'

interface color {
	hex: string
}

interface candidate {
	id: string
	name: string
	tel: string
	email: string
	color: color
	power: number
}

const mock: candidate = {
	id: 'idCandidato',
	name: 'Nome do candidato',
	tel: '(11) 99999-9999',
	email: 'nome@test.com',
	color: {
		hex: '#f0f0f0'
	},
	power: 18
}

render(
	<Candidate
		candidate={mock}
		index={0}
		listCandidates={[]}
		setListCandidates={(values: candidate[]): void => {
			;('')
		}}
	/>
)

describe('<Candidate />', () => {
	it('Validate render', () => {
		expect(screen.getByRole('phone')).toBeInTheDocument()
		expect(screen.getByRole('email')).toBeInTheDocument()
		expect(screen.getByRole('power')).toBeInTheDocument()

		expect(screen.getAllByRole('button')).toHaveLength(2)
	})

	// it('Validate values', () => {
	// 	expect(screen.getByRole('phone')).toHaveTextContent('(11) 99999-9999')
	// 	expect(screen.getByRole('email')).toHaveTextContent('nome@test.com')
	// 	expect(screen.getByRole('power')).toHaveTextContent('18')

	// 	expect(screen.getByText('Nome do candidato')).toBeInTheDocument()
	// })
})
