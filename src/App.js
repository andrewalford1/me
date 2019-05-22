import React, { Component } from 'react';
import { Layout } from 'antd';
import Routes from './Routes';
import Header from './components/Header';
import Footer from './components/Footer';
import './style/App.css';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Layout>
					<Header />
					<Routes />
					<Footer />
				</Layout>
			</div>
		);
	}
}

export default App;
