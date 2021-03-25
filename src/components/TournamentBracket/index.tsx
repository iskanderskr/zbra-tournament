import React from 'react'

import OptionsTournament from '../../components/OptionsTournament'
import Fighter from '../../components/Fighter'

import { Content, Step, Section, Finalist, Title } from './styles'

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
}

function TournamentoBracket({ listCandidates }: props): JSX.Element {
	const getBrackets = (array: candidate[], chunk: number): candidate[][] => {
		const tempArray: candidate[][] = []
		for (let i = 0, j = array.length; i < j; i += chunk) {
			tempArray.push([...array.slice(i, i + chunk)])
		}

		return tempArray
	}

	const getFinalist = (listCandidatesClone: candidate[][]) => {
		return (
			<React.Fragment>
				<Title>Final</Title>
				<Step height={listCandidates.length * (140 + 30)}>
					{listCandidatesClone.map((bracket, i) => {
						return (
							<Finalist key={i}>
								{bracket.map(candidate => {
									return (
										<Fighter
											candidate={candidate}
											key={candidate.id}
										/>
									)
								})}
							</Finalist>
						)
					})}
				</Step>
			</React.Fragment>
		)
	}

	const getSteps = (listCandidatesClone: candidate[][], count: number) => {
		const getWinners = (list: candidate[][]) =>
			list.map(candidates =>
				candidates.length > 1
					? candidates[0].power >= candidates[1].power
						? candidates[0]
						: candidates[1]
					: candidates[0]
			)

		const winners = [getWinners(listCandidatesClone)]

		const nextList = [...winners].flat()

		if (listCandidatesClone.flat().length === nextList.length) return

		return (
			<React.Fragment>
				<Title>Etapa {count}</Title>
				<Step height={listCandidates.length * (140 + 30)}>
					{listCandidatesClone.map((bracket, i) => {
						return (
							<Section
								key={i}
								height={
									listCandidates.length ===
									listCandidatesClone.length
										? bracket.length * (140 + 15)
										: bracket.length * 1.5 * (140 + 15)
								}>
								{bracket.map(candidate => {
									return (
										<Fighter
											candidate={candidate}
											key={candidate.id}
										/>
									)
								})}
							</Section>
						)
					})}
				</Step>
				{nextList.length > 1 ? (
					getSteps(getBrackets(nextList, 2), ++count)
				) : (
					<></>
				)}
				{nextList.length === 1 ? getFinalist(winners) : <></>}
			</React.Fragment>
		)
	}

	const listCandidatesClone = getBrackets(listCandidates, 2)

	return (
		<React.Fragment>
			<Content>{getSteps(listCandidatesClone, 1)}</Content>
			<OptionsTournament />
		</React.Fragment>
	)
}

export default TournamentoBracket
