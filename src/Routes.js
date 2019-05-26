import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Qualifications from './pages/Qualifications.jsx';
import Blog from './pages/Blog.jsx';
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';
import Timeline from './pages/Timeline.jsx';
import UnknownPage from './pages/UnknownPage.jsx';

const Routes = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/blog' component={Blog} />
			<Route exact path='/qualifications' component={Qualifications} />
			<Route exact path='/projects' component={Projects} />
			<Route exact path='/skills' component={Skills} />
			<Route exact path='/timeline' component={Timeline} />
			<Route component={UnknownPage} />
		</Switch>
	</main>
);

export default Routes;
