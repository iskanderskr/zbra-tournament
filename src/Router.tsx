import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ListCandidates from './pages/List-candidates'
import Tournament from './pages/Tournament'
import Header from './components/Header'

function App(): JSX.Element {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/tournament">
					<Tournament />
				</Route>
				<Route>
					<ListCandidates />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
