import React from 'react';
import { Link } from 'react-router-dom';
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
		<h1 className='App-Header'>Andrew's Portfolio</h1>

		<div>
			<div>
				<h2>About Me</h2>
				<p>
					Ea veniam irure sit velit adipisicing aute cillum minim
					quis. Occaecat laborum velit proident nisi anim pariatur eu
					velit. Reprehenderit enim enim pariatur voluptate elit.{' '}
					<Link>Click here to learn more</Link>
				</p>
			</div>
			<div>
				<h2>News</h2>
				<p>
					Aute magna reprehenderit commodo ea velit irure ut. Cillum
					elit laborum exercitation id labore enim officia nisi qui
					aliquip excepteur laborum non. Eu duis nostrud adipisicing
					sit eu. <Link>Click here to learn more</Link>
				</p>
			</div>
			<div>
				<h2>Projects</h2>
				<p>
					Qui deserunt veniam qui mollit. Ullamco sit in nulla
					consectetur aliqua duis proident consequat magna tempor. Eu
					aliqua ea ea occaecat labore elit minim irure laboris
					commodo aliquip mollit ullamco. Eu duis ea velit non est
					ipsum occaecat. Magna consequat tempor irure id quis est qui
					Lorem eu proident voluptate duis reprehenderit.{' '}
					<Link>Click here to learn more</Link>
				</p>
			</div>
		</div>
	</div>
);

export default Home;
