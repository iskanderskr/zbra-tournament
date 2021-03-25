import React, { useState } from 'react'

import { Button, Popconfirm } from 'antd'
import { PhoneOutlined, MailOutlined, TrophyOutlined } from '@ant-design/icons'

import { Candidate, Actions, Property } from './styles'
import FormAddCandidate from '../AddCandidate'

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
	index: number
	candidate: candidate
	listCandidates: candidate[]
	setListCandidates: (value: candidate[]) => void
}

function App({
	candidate,
	listCandidates,
	index,
	setListCandidates
}: props): JSX.Element {
	const [openedModal, setOpenedModal] = useState(false)

	const handleSetListCandidates = newValue => {
		setListCandidates(newValue)
	}

	const handleSetOpenedModal = newValue => {
		setOpenedModal(newValue)
	}

	const deleteCandidate = () => {
		const cloneListCandidates = [...listCandidates]
		cloneListCandidates.splice(index, 1)
		setListCandidates(cloneListCandidates)
		localStorage.setItem(
			'listCandidates',
			JSON.stringify(cloneListCandidates)
		)
	}

	const editCandidate = (values: candidate) => {
		const actualCandidate = { ...values }
		actualCandidate.id = candidate.id
		actualCandidate.power = candidate.power
		const cloneListCandidates = [...listCandidates]
		cloneListCandidates.splice(index, 1, actualCandidate)
		setListCandidates(cloneListCandidates)
		localStorage.setItem(
			'listCandidates',
			JSON.stringify(cloneListCandidates)
		)
		setOpenedModal(false)
	}

	return (
		<React.Fragment>
			<Candidate themecolor={candidate.color.hex} title={candidate.name}>
				<Property role="phone">
					<PhoneOutlined /> - {candidate.tel}
				</Property>
				<Property role="email">
					<MailOutlined /> - {candidate.email}
				</Property>
				<Property role="power">
					<TrophyOutlined /> - {candidate.power}
				</Property>
				<Actions>
					<Button onClick={() => setOpenedModal(true)}>Editar</Button>
					<Popconfirm
						title="Tem certeza?"
						okText="Sim"
						onConfirm={deleteCandidate}
						cancelText="Não">
						<Button>Apagar</Button>
					</Popconfirm>
				</Actions>
			</Candidate>
			<FormAddCandidate
				listCandidates={listCandidates}
				openedModal={openedModal}
				finish={editCandidate}
				setOpenedModal={handleSetOpenedModal}
				initialValues={candidate}
				setListCandidate={handleSetListCandidates}
			/>
		</React.Fragment>
	)
}

export default App
