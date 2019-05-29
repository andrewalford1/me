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
				text={`Ea veniam irure sit velit adipisicing aute cillum minim
						quis. Occaecat laborum velit proident nisi anim pariatur
						eu velit. Reprehenderit enim enim pariatur voluptate
						elit.`}
				button={
					<MDBBtnGroup className={`mb-4`}>
						<MDBBtn color={`primary`} href={`#/blog`}>
							My Blog
						</MDBBtn>
						<MDBBtn color={`primary`} href={`#/timeline`}>
							My Life so far
						</MDBBtn>
					</MDBBtnGroup>
				}
			/>
			<Card
				title={`My Qualifications`}
				text={`Aute magna reprehenderit commodo ea velit irure ut.
						Cillum elit laborum exercitation id labore enim officia
						nisi qui aliquip excepteur laborum non. Eu duis nostrud
						adipisicing sit eu.`}
				button={
					<MDBBtn color={`primary`} href={`#/qualifications`}>
						Learn More...
					</MDBBtn>
				}
			/>
			<Card
				title={`My Skills`}
				text={`Ipsum nulla ut nostrud consectetur aute enim mollit
						magna et voluptate cupidatat sit ullamco. Est cupidatat
						commodo nulla quis pariatur sint incididunt. Fugiat aute
						aliqua officia aliquip. Est labore aliquip magna aliqua
						eiusmod veniam sint proident. Nulla non deserunt elit
						enim tempor et sit incididunt.`}
				button={
					<MDBBtn color={`primary`} href={`#/skills`}>
						Learn More...
					</MDBBtn>
				}
			/>
			<Card
				title={`Projects I've Worked on`}
				text={`Qui deserunt veniam qui mollit. Ullamco sit in nulla
						consectetur aliqua duis proident consequat magna tempor.
						Eu aliqua ea ea occaecat labore elit minim irure laboris
						commodo aliquip mollit ullamco. Eu duis ea velit non est
						ipsum occaecat. Magna consequat tempor irure id quis est
						qui Lorem eu proident voluptate duis reprehenderit.`}
				button={
					<MDBBtn color={`primary`} href={`#/projects`}>
						Learn More...
					</MDBBtn>
				}
			/>
		</div>
	</div>
);

export default Home;
