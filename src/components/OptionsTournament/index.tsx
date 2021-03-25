import React from 'react'
import { Link } from 'react-router-dom'

import {
	Actions,
	Container,
	Checkbox,
	Label,
	Content,
	ButtonTournament
} from './styles'

function Options(): JSX.Element {
	return (
		<Container>
			<Checkbox type="checkbox" id="isOptionsOpen" />
			<Label htmlFor="isOptionsOpen">
				<span>
					<div className="plus"></div>
				</span>
			</Label>
			<Content>
				<Actions>
					<Link to="/">
						<ButtonTournament type="primary">
							Editar participantes
						</ButtonTournament>
					</Link>
				</Actions>
			</Content>
		</Container>
	)
}

export default Options
