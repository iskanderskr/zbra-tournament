import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Fighter from '../'

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

beforeEach(() => {
	render(<Fighter candidate={mock} />)
})

describe('<Fighter />', () => {
	it('Validate render', () => {
		expect(screen.getByRole('power')).toBeInTheDocument()
		expect(screen.getByText('Nome do candidato')).toBeInTheDocument()
	})

	it('Validate values', () => {
		expect(screen.getByRole('power')).toHaveTextContent(
			`Poder de luta - ${mock.power}`
		)
	})
})
