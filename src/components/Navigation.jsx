import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Navigation = props => {
	let items = [];
	if (props.routes) {
		props.routes.forEach(function(route, index) {
			items.push(
				<NavItem key={index}>
					<Nav.Link as={NavLink} to={route.route} exact>
						{route.name}
					</Nav.Link>
				</NavItem>
			);
		});
	}

	return props.routes ? (
		<Navbar
			className='mr-auto'
			style={{ width: '100%', textAlign: 'center' }}
			expand='md'
			sticky='top'
		>
			<Navbar.Brand>{props.brand}</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav defaultActiveKey={props.routes[0]}> {items} </Nav>
			</Navbar.Collapse>
		</Navbar>
	) : null;
};

export default Navigation;
