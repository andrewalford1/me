import React from 'react';
import { Navbar } from 'react-bootstrap';
import Navigation from './Navigation.jsx';
const Header = () => (
	<Navbar expand='lg' sticky='top'>
		<Navbar.Brand>
			<h1>Andrew's Portfolio</h1>
		</Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Navigation />
		</Navbar.Collapse>
	</Navbar>
);

export default Header;
