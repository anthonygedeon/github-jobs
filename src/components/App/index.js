import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import JobContent from '../../pages/jobContent';
import { JobPostsProvider } from '../../providers/JobPostsContext';
import './styles.scss';

function App() {
	return (
		<Router>
			<JobPostsProvider>
				<Route exact path="/" component={Home} />
				<Route exact path="/:job" component={JobContent} />
			</JobPostsProvider>
		</Router>
	);
}

export default App;
