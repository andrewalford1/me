import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Settings from './Settings';

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/settings' component={Settings} />
			<Redirect to='/' />
		</Switch>
	</main>
);

export default Main;
