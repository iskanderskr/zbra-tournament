import React, { useState } from 'react'

import Candidates from '../../components/List-candidates'
import Options from '../../components/Options'

import { Content } from './styles'

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

function App(): JSX.Element {
	const listCandidatesJSON: string | null = localStorage.getItem(
		'listCandidates'
	)

	const [listCandidates, setListCandidates] = useState(
		listCandidatesJSON ? JSON.parse(listCandidatesJSON) : []
	)

	const handleSetListCandidates = (value: candidate[]) => {
		setListCandidates(value)
	}

	return (
		<React.Fragment>
			<Content>
				<Candidates
					listCandidates={listCandidates}
					setListCandidates={handleSetListCandidates}
				/>
			</Content>
			<Options
				listCandidates={listCandidates}
				setListCandidates={handleSetListCandidates}
			/>
		</React.Fragment>
	)
}

export default App
