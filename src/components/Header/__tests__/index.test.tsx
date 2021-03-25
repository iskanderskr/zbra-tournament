import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Header from '../'

render(<Header />)

describe('<Header />', () => {
	it('Validate render', () => {
		expect(screen.getByText('ZBRA Tournament')).toBeInTheDocument()
	})
})
