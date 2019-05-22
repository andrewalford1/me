import React from 'react';
import Navigation from './Navigation';
import { Layout } from 'antd';
import '../style/App.css';

const Header = () => (
	<Layout>
		<div>
			<h1 className='App-Title'>Andrew's Portfolio</h1>
			<Navigation />
		</div>
	</Layout>
);

export default Header;
