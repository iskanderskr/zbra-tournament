import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import FormAddCandidate from '../AddCandidate'

import {
	Actions,
	AddButton,
	Container,
	Checkbox,
	Label,
	Content,
	ButtonTournament
} from './styles'

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

function Options({ listCandidates, setListCandidates }: props): JSX.Element {
	const [openedModal, setOpenedModal] = useState(false)

	return (
		<Container>
			<Checkbox type="checkbox" id="isOptionsOpen" />
			<Label htmlFor="isOptionsOpen">
				<span>
					<div className="plus"></div>
				</span>
			</Label>
			<Content>
				<FormAddCandidate
					listCandidates={listCandidates}
					openedModal={openedModal}
					setOpenedModal={setOpenedModal}
					setListCandidate={setListCandidates}
					initialValues={undefined}
				/>
				<Actions>
					<AddButton onClick={() => setOpenedModal(true)}>
						Adicionar participante
					</AddButton>
					<Link to="/tournament">
						<ButtonTournament type="primary">
							Iniciar torneio
						</ButtonTournament>
					</Link>
				</Actions>
			</Content>
		</Container>
	)
}

export default Options
