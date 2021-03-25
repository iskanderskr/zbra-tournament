import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import Options from '../'

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

const history = createMemoryHistory()

beforeEach(() => {
	render(
		<Router history={history}>
			<Options
				setListCandidates={(values: candidate[]): void => {
					;('')
				}}
				listCandidates={[]}
			/>
		</Router>
	)
})

describe('<Options />', () => {
	it('Validate render', () => {
		expect(screen.getAllByRole('button')).toHaveLength(2)
	})

	it('Validate values', () => {
		expect(screen.getByText('Adicionar participante')).toBeInTheDocument()
		expect(screen.getByText('Iniciar torneio')).toBeInTheDocument()
	})
})
