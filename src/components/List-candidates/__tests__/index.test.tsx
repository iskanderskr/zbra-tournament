import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import ListCandidates from '..'

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

beforeEach(() => {
	render(
		<ListCandidates
			listCandidates={mock}
			setListCandidates={(values: candidate[]): void => {
				;('')
			}}
		/>
	)
})

describe('<ListCandidates />', () => {
	it('Validate render', () => {
		expect(screen.getAllByRole('phone')).toHaveLength(2)
		expect(screen.getAllByRole('email')).toHaveLength(2)
		expect(screen.getAllByRole('power')).toHaveLength(2)

		expect(screen.getAllByRole('button')).toHaveLength(4)
	})

	it('Validate values', () => {
		expect(screen.getAllByRole('phone')[0]).toHaveTextContent(
			'(11) 99999-9999'
		)
		expect(screen.getAllByRole('email')[0]).toHaveTextContent(
			'nome_1@test.com'
		)
		expect(screen.getAllByRole('power')[0]).toHaveTextContent('18')

		expect(screen.getAllByRole('phone')[1]).toHaveTextContent(
			'(11) 88888-8888'
		)
		expect(screen.getAllByRole('email')[1]).toHaveTextContent(
			'nome_2@test.com'
		)
		expect(screen.getAllByRole('power')[1]).toHaveTextContent('50')
	})
})
