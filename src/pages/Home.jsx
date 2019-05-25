import React from 'react';
import Highlights from '../components/Highlights';

const Home = () => (
	<div>
		<Highlights
			highlights={[
				{
					imgSrc: './res/img/red.jpg',
					imgAlt: 'red',
					content: 'RED',
					link: './projects#Project-A'
				},
				{
					imgSrc: './res/img/green.jpg',
					imgAlt: 'green',
					content: 'GREEN',
					link: './projects#Project-B'
				},
				{
					imgSrc: './res/img/blue.jpg',
					imgAlt: 'blue',
					content: 'BLUE',
					link: './projects#Project-C'
				}
			]}
		/>
		<h1 className='App-Header'>Who Am I?</h1>
	</div>
);

export default Home;
