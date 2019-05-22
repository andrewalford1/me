import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const Navigation = () => (
	<div>
		<Menu mode='horizontal'>
			<Menu.Item key='/'>
				<Link to='/'>Home</Link>
			</Menu.Item>
			<Menu.Item key='/about'>
				<Link to='/about'>About</Link>
			</Menu.Item>
			<Menu.Item key='/contact'>
				<Link to='/contact'>
					<Icon type='mail' /> Contact
				</Link>
			</Menu.Item>
			<Menu.Item key='/projects'>
				<Link to='/projects'>Projects</Link>
			</Menu.Item>
		</Menu>
	</div>
);

export default Navigation;
