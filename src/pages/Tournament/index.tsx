import React, { useState } from 'react'

import TournamentBracket from '../../components/TournamentBracket'

function Tournament(): JSX.Element {
	const listCandidatesJSON: string | null = localStorage.getItem(
		'listCandidates'
	)

	const [listCandidates] = useState(
		listCandidatesJSON ? JSON.parse(listCandidatesJSON) : []
	)

	return (
		<React.Fragment>
			<TournamentBracket listCandidates={listCandidates} />
		</React.Fragment>
	)
}

export default Tournament
