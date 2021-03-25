import React from 'react'
import { Empty, Row } from 'antd'

import Candidate from '../Candidate'
import { Column, List } from './styles'

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
	listCandidates: candidate[]
	setListCandidates: (value: candidate[]) => void
}

function App({ listCandidates, setListCandidates }: props): JSX.Element {
	const handleSetListCandidates = (value: candidate[]) => {
		setListCandidates(value)
	}

	return (
		<List>
			<Row>
				{listCandidates.length ? (
					listCandidates.map((candidate, i) => (
						<Column lg={8} md={12} sm={24} key={candidate.id}>
							<Candidate
								candidate={candidate}
								listCandidates={listCandidates}
								index={i}
								setListCandidates={handleSetListCandidates}
							/>
						</Column>
					))
				) : (
					<></>
				)}
			</Row>
			{!listCandidates.length ? (
				<Empty description="Sem candidatos ainda" />
			) : (
				<></>
			)}
		</List>
	)
}

export default App
