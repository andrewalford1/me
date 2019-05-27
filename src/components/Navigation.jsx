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

	let download = null;
	if (props.download) {
		download = (
			<Nav className='justify-content-end'>
				<NavItem className='mr-sm-2'>
					<Nav.Link href={props.download.link}>
						Download {props.download.name}
					</Nav.Link>
				</NavItem>
			</Nav>
		);
	}

	return props.routes ? (
		<Navbar
			className='mr-auto'
			style={{ width: '100%', textAlign: 'center' }}
			expand='md'
		>
			<Navbar.Brand>{props.brand}</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav defaultActiveKey={props.routes[0]} className='mr-auto'>
					{items}
				</Nav>
				{download}
			</Navbar.Collapse>
		</Navbar>
	) : null;
};

export default Navigation;
