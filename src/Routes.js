import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import News from './pages/News.jsx';
import Contact from './pages/Contact.jsx';
import Projects from './pages/Projects.jsx';
import Resume from './pages/Resume.jsx';
import UnknownPage from './pages/UnknownPage.jsx';

const Routes = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/about' component={About} />
			<Route exact path='/news' component={News} />
			<Route exact path='/contact' component={Contact} />
			<Route exact path='/projects' component={Projects} />
			<Route exact path='/resume' component={Resume} />
			<Route component={UnknownPage} />
		</Switch>
	</main>
);

export default Routes;
