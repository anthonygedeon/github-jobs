import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import JobContent from '../../pages/jobContent';
import Header from '../Header/index';
import './styles.scss';

function App() {
	return (
		<Router>
			<div className="App">
				<div className="container">
					<Header />

				</div>
			</div>

			<Route exact path="/" component={Home} />
			<Route exact path="/:job" component={JobContent} />
		</Router>
	);
}

export default App;
