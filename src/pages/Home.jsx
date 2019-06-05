import React from 'react';
import { MDBBtn, MDBBtnGroup } from 'mdbreact';
import Card from '../components/Card';
import Highlights from '../components/Highlights';

const Home = () => (
	<div>
		<hr />
		<Highlights
			highlights={[
				{
					imgSrc: `./res/img/projects/galaxy_adventure.jpg`,
					imgAlt: `Screen shot from 'Galaxy Adventure'`,
					content: `Galaxy Adventure`,
					link: `./projects#Project-GalaxyAdventure`
				},
				{
					imgSrc: `./res/img/projects/midnight_rising.jpg`,
					imgAlt: `Screen shot from 'Midnight Rising'`,
					content: `Midnight Rising`,
					link: `./projects#Project-MidnightRising`
				},
				{
					imgSrc: `./res/img/projects/crazy_carnival.jpg`,
					imgAlt: `Screen shot from 'Crazy Carnival'`,
					content: `The Crazy Carnival`,
					link: `./projects#Project-CrazyCarnival`
				},
				{
					imgSrc: `./res/img/projects/cpu_online.jpg`,
					imgAlt: `Screen shot from 'CPU Online'`,
					content: `CPU Online`,
					link: `./projects#Project-CPUonline`
				}
			]}
		/>
		<hr />
		<h1 className='App-Header'>Explore</h1>

		<div className={`App-CardGroup`}>
			<Card
				title={`About Me`}
				text={`Hi, my name is Andrew Alford. I am a junior Software 
				Engineer from the UK specialising in both games development 
				(through my degree) and programming for the web 
				(through my own interests). My goals are to constantly be
				improving my quality of code and to work within industry 
				on new projects with exciting technologies.`}
				button={
					<MDBBtnGroup className={`mb-4`}>
						<MDBBtn
							color={`primary`}
							onClick={() => window.scrollTo(0, 0)}
							href={`#/timeline`}
						>
							View my Timeline...
						</MDBBtn>
					</MDBBtnGroup>
				}
			/>
			<Card
				title={`My Qualifications`}
				text={`I have been programming for over five years now and have
				a First-Class Degree in Computer Science with Games Development
				from Northumbria University. Click the link below to view a 
				full break-down of my qualifications.`}
				button={
					<MDBBtn
						color={`primary`}
						href={`#/qualifications`}
						onClick={() => window.scrollTo(0, 0)}
					>
						Learn More...
					</MDBBtn>
				}
			/>
			<Card
				title={`Projects I've Worked on`}
				text={`Throughout University I have worked on many projects both
				individually and within groups such as games, animations, and 
				educational simulators. Click the link below to learn about 
				all the University projects I’m most proud of.`}
				button={
					<MDBBtn
						color={`primary`}
						href={`#/projects`}
						onClick={() => window.scrollTo(0, 0)}
					>
						Learn More...
					</MDBBtn>
				}
			/>
		</div>
	</div>
);

export default Home;
