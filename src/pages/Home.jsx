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
					imgSrc: `https://mdbootstrap.com/img/Photos/Slides/img%20(43).jpg`,
					imgAlt: `MDB image 43`,
					content: `Slide 1`,
					link: `./projects#Project-A`
				},
				{
					imgSrc: `https://mdbootstrap.com/img/Photos/Slides/img%20(63).jpg`,
					imgAlt: `MDB image 63`,
					content: `Slide 2`,
					link: `./projects#Project-B`
				},
				{
					imgSrc: `https://mdbootstrap.com/img/Photos/Slides/img%20(83).jpg`,
					imgAlt: `MDB image 83`,
					content: `Slide 3`,
					link: `./projects#Project-C`
				},
				{
					imgSrc: `https://mdbootstrap.com/img/Photos/Slides/img%20(103).jpg`,
					imgAlt: `MDB image 103`,
					content: `Slide 4`,
					link: `./projects#Project-D`
				},
				{
					imgSrc: `https://mdbootstrap.com/img/Photos/Slides/img%20(113).jpg`,
					imgAlt: `MDB image 113`,
					content: `Slide 5`,
					link: `./projects#Project-E`
				}
			]}
		/>
		<hr />
		<h1 className='App-Header'>Explore</h1>

		<div className={`App-CardGroup`}>
			<Card
				title={`About Me`}
				text={`Hi, my name is Andrew Alford. I'm junior Software 
				Engineer from the UK specialing in both games development 
				(through my degree) and programming for the web 
				(through my own interests). My goals are to constantly be
				impoving my quality of code and to work within industry 
				on new projects with exciting technologies.`}
				button={
					<MDBBtnGroup className={`mb-4`}>
						<MDBBtn
							color={`primary`}
							disabled
							href={`#/blog`}
							onClick={() => window.scrollTo(0, 0)}
							active={false}
						>
							My Blog
						</MDBBtn>
						<MDBBtn
							color={`primary`}
							onClick={() => window.scrollTo(0, 0)}
							href={`#/timeline`}
						>
							My Life so far
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
				title={`My Skills`}
				text={`Being a creative thinker I can resolve issues quickly. `}
				button={
					<MDBBtn
						color={`primary`}
						href={`#/skills`}
						onClick={() => window.scrollTo(0, 0)}
					>
						Learn More...
					</MDBBtn>
				}
			/>
			<Card
				title={`Projects I've Worked on`}
				text={`Thoughout University I have worked on many projects both
				individually and within groups such as games, animations, and 
				educational simulators. Click the link below to learn about 
				all the University projects I'am most proud of.`}
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
