import React from 'react';
import Navigation from './Navigation.jsx';

const Header = props => (
	<Navigation brand={props.title} routes={props.routes} />
);

export default Header;
