import React, { Component } from 'react';
import { MDBContainer } from 'mdbreact';
import Routes from './Routes';
import Header from './components/Header';
import Footer from './components/Footer';

/* <div style={{ margin: '5%', marginTop: '0' }}></div> */

class App extends Component {
	render() {
		return (
			<MDBContainer fluid>
				<Header
					title={`Andrew's Portfolio`}
					routes={[
						{ name: 'Home', route: '/' },
						{ name: 'Blog', route: '/blog' },
						{ name: 'Qualifications', route: '/qualifications' },
						{ name: 'Skills', route: '/skills' },
						{ name: 'Projects', route: '/projects' },
						{ name: 'Timeline', route: '/timeline' }
					]}
					download={{
						name: 'CV',
						link:
							'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
					}}
				/>
				<Routes />
				<Footer />
			</MDBContainer>
		);
	}
}

export default App;
