import React, { Component } from 'react';
import '../style/App.css';
import Title from './Title';
import Footer from './Footer';

class App extends Component {
	constructor() {
		super();
		this.name = 'Andrew';
	}
	render() {
		return (
			<div className='App'>
				<Title />
				<Footer />
			</div>
		);
	}
}

export default App;
