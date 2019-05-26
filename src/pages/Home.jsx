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
		<h1 className='App-Header'>Andrew's Portfolio</h1>

		<div>
			<h2>Who Am I?</h2>
			<p>
				Ea veniam irure sit velit adipisicing aute cillum minim quis.
				Occaecat laborum velit proident nisi anim pariatur eu velit.
				Reprehenderit enim enim pariatur voluptate elit.
			</p>
			<h2>Keeping Up to Date</h2>
			<p>
				Aute magna reprehenderit commodo ea velit irure ut. Cillum elit
				laborum exercitation id labore enim officia nisi qui aliquip
				excepteur laborum non. Eu duis nostrud adipisicing sit eu.
			</p>
			<h2>What have I been Working on?</h2>
			<p>
				Qui deserunt veniam qui mollit. Ullamco sit in nulla consectetur
				aliqua duis proident consequat magna tempor. Eu aliqua ea ea
				occaecat labore elit minim irure laboris commodo aliquip mollit
				ullamco. Eu duis ea velit non est ipsum occaecat. Magna
				consequat tempor irure id quis est qui Lorem eu proident
				voluptate duis reprehenderit.
			</p>
			<h2>Looking to Hire me?</h2>
			<p>
				Velit est commodo eu nostrud deserunt incididunt anim do eu id
				ipsum. Velit et dolor anim id elit dolore eu consequat cillum
				cillum. Magna nisi adipisicing esse Lorem cillum dolor fugiat
				duis eiusmod. Irure consequat incididunt ipsum reprehenderit
				officia occaecat. Dolor incididunt officia officia quis aute
				sint aliqua culpa. Velit proident sit quis veniam ut eu
				excepteur labore id. Officia voluptate consectetur fugiat anim
				aliqua amet ex irure velit Lorem ex culpa irure.
			</p>
		</div>
	</div>
);

export default Home;
