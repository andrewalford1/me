import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Routes from './Routes';
import Header from './components/Header';

class App extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Header />
				</Row>
				<Row>
					<Routes />
				</Row>
				<Row>
					<Col>
						<div>Footer</div>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default App;
