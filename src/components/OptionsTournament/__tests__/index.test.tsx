import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import OptionsTournament from '../'

const history = createMemoryHistory()

beforeEach(() => {
	render(
		<Router history={history}>
			<OptionsTournament />
		</Router>
	)
})

describe('<OptionsTournament />', () => {
	it('Validate render', () => {
		expect(screen.getByRole('button')).toBeInTheDocument()
		expect(screen.getByText('Editar participantes')).toBeInTheDocument()
	})
})
