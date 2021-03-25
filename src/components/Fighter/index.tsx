import React from 'react'

import { TrophyOutlined } from '@ant-design/icons'

import { Candidate, Property } from './styles'

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

interface props {
	candidate: candidate
}

function Fighter({ candidate }: props): JSX.Element {
	return (
		<React.Fragment>
			<Candidate themecolor={candidate.color.hex} title={candidate.name}>
				<Property>
					<TrophyOutlined />{' '}
					<span role="power">Poder de luta - {candidate.power}</span>
				</Property>
			</Candidate>
		</React.Fragment>
	)
}

export default Fighter
