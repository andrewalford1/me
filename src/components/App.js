import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../style/App.css';
import Navigation from './Navigation';
import Footer from './Footer';
import Home from './Home';
import Settings from './Settings';
import UnknownPage from './UnknownPage';

class App extends Component {
	constructor() {
		super();
		this.state = {
			title: 'Welcome Andrew'
		};
	}

	changeTitle(title) {
		this.setState({ title });
	}
	render() {
		return (
			<div className='App'>
				<Navigation />

				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/settings' component={Settings} />
					<Route component={UnknownPage} />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;
