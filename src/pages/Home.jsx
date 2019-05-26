import React from 'react';
import { Card, Button } from 'react-bootstrap';
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
			<Card>
				<Card.Body>
					<Card.Title>About Me</Card.Title>
					<Card.Text>
						Ea veniam irure sit velit adipisicing aute cillum minim
						quis. Occaecat laborum velit proident nisi anim pariatur
						eu velit. Reprehenderit enim enim pariatur voluptate
						elit.
					</Card.Text>
					<Button variant='primary'>Learn More...</Button>
				</Card.Body>
			</Card>
			<Card>
				<Card.Body>
					<Card.Title>News</Card.Title>
					<Card.Text>
						Aute magna reprehenderit commodo ea velit irure ut.
						Cillum elit laborum exercitation id labore enim officia
						nisi qui aliquip excepteur laborum non. Eu duis nostrud
						adipisicing sit eu.
					</Card.Text>
					<Button variant='primary'>Learn More...</Button>
				</Card.Body>
			</Card>
			<Card>
				<Card.Body>
					<Card.Title>Projects</Card.Title>
					<Card.Text>
						Qui deserunt veniam qui mollit. Ullamco sit in nulla
						consectetur aliqua duis proident consequat magna tempor.
						Eu aliqua ea ea occaecat labore elit minim irure laboris
						commodo aliquip mollit ullamco. Eu duis ea velit non est
						ipsum occaecat. Magna consequat tempor irure id quis est
						qui Lorem eu proident voluptate duis reprehenderit.
					</Card.Text>
					<Button variant='primary'>Learn More...</Button>
				</Card.Body>
			</Card>
		</div>
	</div>
);

export default Home;
