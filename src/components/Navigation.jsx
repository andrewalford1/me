import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Navigation = () => (
	<div>
		<Nav className='mr-auto'>
			<Nav>
				{/* "NavLink" here since "active" class styling is needed */}
				<Nav.Link as={NavLink} to='/' exact>
					Home
				</Nav.Link>
				<Nav.Link as={NavLink} to='/about'>
					About
				</Nav.Link>
				<Nav.Link as={NavLink} to='/contact'>
					Contact
				</Nav.Link>
				<Nav.Link as={NavLink} to='/projects'>
					Projects
				</Nav.Link>
			</Nav>
		</Nav>
	</div>
);

export default Navigation;
