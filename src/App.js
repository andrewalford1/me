import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Routes from './Routes';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
	render() {
		return (
			<Container>
				<Header
					title={`Andrew's Portfolio`}
					routes={[
						{ name: 'Home', route: '/' },
						{ name: 'About', route: '/about' },
						{ name: 'Projects', route: '/projects' },
						{ name: 'Contact', route: '/contact' }
					]}
				/>
				<Routes />
				<Footer />
			</Container>
		);
	}
}

export default App;