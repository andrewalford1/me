import React from 'react';
import { Card, ButtonGroup, Button } from 'react-bootstrap';
import Highlights from '../components/Highlights';

const Home = () => (
	<div>
		<hr />
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
		<hr />
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

					<ButtonGroup>
						<Button variant='primary' href='#/blog'>
							My Blog
						</Button>
						<Button variant='primary' href='#/timeline'>
							My Life so far
						</Button>
					</ButtonGroup>
				</Card.Body>
			</Card>
			<Card>
				<Card.Body>
					<Card.Title>My Qualifications</Card.Title>
					<Card.Text>
						Aute magna reprehenderit commodo ea velit irure ut.
						Cillum elit laborum exercitation id labore enim officia
						nisi qui aliquip excepteur laborum non. Eu duis nostrud
						adipisicing sit eu.
					</Card.Text>
					<Button variant='primary' href='#/qualifications'>
						Learn More...
					</Button>
				</Card.Body>
			</Card>
			<Card>
				<Card.Body>
					<Card.Title>My Skills</Card.Title>
					<Card.Text>
						Ipsum nulla ut nostrud consectetur aute enim mollit
						magna et voluptate cupidatat sit ullamco. Est cupidatat
						commodo nulla quis pariatur sint incididunt. Fugiat aute
						aliqua officia aliquip. Est labore aliquip magna aliqua
						eiusmod veniam sint proident. Nulla non deserunt elit
						enim tempor et sit incididunt.
					</Card.Text>
					<Button variant='primary' href='#/skills'>
						Learn More...
					</Button>
				</Card.Body>
			</Card>
			<Card>
				<Card.Body>
					<Card.Title>Projects I've Worked on</Card.Title>
					<Card.Text>
						Qui deserunt veniam qui mollit. Ullamco sit in nulla
						consectetur aliqua duis proident consequat magna tempor.
						Eu aliqua ea ea occaecat labore elit minim irure laboris
						commodo aliquip mollit ullamco. Eu duis ea velit non est
						ipsum occaecat. Magna consequat tempor irure id quis est
						qui Lorem eu proident voluptate duis reprehenderit.
					</Card.Text>
					<Button variant='primary' href='#/projects'>
						Learn More...
					</Button>
				</Card.Body>
			</Card>
		</div>
	</div>
);

export default Home;
