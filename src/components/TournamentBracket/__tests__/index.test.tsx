import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import TournamentBrackets from '../'

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

const mock: candidate[] = [
	{
		id: 'idCandidato 1',
		name: 'Nome do candidato 1',
		tel: '(11) 99999-9999',
		email: 'nome_1@test.com',
		color: {
			hex: '#f0f0f0'
		},
		power: 18
	},
	{
		id: 'idCandidato 2',
		name: 'Nome do candidato 2',
		tel: '(11) 88888-8888',
		email: 'nome_2@test.com',
		color: {
			hex: '#fae234'
		},
		power: 50
	}
]

const history = createMemoryHistory()

beforeEach(() => {
	render(
		<Router history={history}>
			<TournamentBrackets listCandidates={mock} />
		</Router>
	)
})

describe('<TournamentBrackets />', () => {
	it('Validate render', () => {
		expect(screen.getByRole('button')).toBeInTheDocument()
		expect(screen.getByText('Editar participantes')).toBeInTheDocument()
	})
})
