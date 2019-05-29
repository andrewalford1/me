import React from 'react';
import { Image } from 'react-bootstrap';

const Projects = () => (
	<div>
		<hr />
		<h1 className='App-Header'>Projects</h1>
		<div className={`App-CardGroup`}>
			<div id={`Project-NoRestFortheMartians`}>
				<h2>No Rest for the Martians - May 2018</h2>
				<Image
					fluid
					className='d-block w-100'
					src={`https://mdbootstrap.com/img/Photos/Slides/img%20(10).jpg`}
					alt={`Tempory Image`}
				/>
				<p>
					Developed by myself and three other students, 'No Rest for
					the Martians' was the major piece of groupwork submitted for
					my second year of University. Developed using Unreal Engine
					4, the game is a top-down shooter where the player must
					fight killer robots on the surface of Mars. My roles on this
					project included both Sound Design and level design, making
					me responsible for the implementing:
				</p>
				<ul>
					<li>
						Sourcing and implementing sound effects in the game such
						as footsteps, gunfire, and bubbling lava.
					</li>
					<li>Sourcing and implementing music within the game.</li>
					<li>
						Providing dialouge for the enemy characters within the
						game.
					</li>
					<li>
						Using C++ to script functional doors which open/close in
						response to the players actions within the game.
					</li>
					<li>
						Using C++ to create reusable and customisable 'pick-up'
						items which affect the stats.
					</li>
					<li>
						Creating models which change state and eventually
						explode as a result of damage caused by player
						interaction.
					</li>
				</ul>
			</div>
			<div id={`Project-GalaxyAdventure`}>
				<h2>Galaxy Adventure - December 2018</h2>
				<Image
					fluid
					className='d-block w-100'
					src={`https://mdbootstrap.com/img/Photos/Slides/img%20(12).jpg`}
					alt={`Tempory Image`}
				/>
				<p>
					Excepteur esse ea esse Lorem tempor. Tempor consectetur
					proident dolor non magna minim Lorem ad labore aliqua. Do
					quis aliquip eiusmod officia magna adipisicing sint commodo
					fugiat laborum veniam nostrud. Cillum aliqua laborum ad non
					ea nisi eiusmod. Eu est nisi elit ullamco ea exercitation
					adipisicing enim occaecat voluptate ad.
				</p>
			</div>
			<div id={`Project-ChristmasConundrum`}>
				<h2>Christmas Conundrum - December 2018</h2>
				<Image
					fluid
					className='d-block w-100'
					src={`https://mdbootstrap.com/img/Photos/Slides/img%20(14).jpg`}
					alt={`Tempory Image`}
				/>
				<p>
					Dolor aute sunt exercitation ad aliquip. Elit qui nulla
					consectetur cillum reprehenderit laborum. Adipisicing duis
					veniam consectetur fugiat Lorem. Ea aliqua elit ullamco
					deserunt qui elit pariatur mollit qui minim eu dolor.
					Officia sunt minim reprehenderit ea deserunt. Proident
					excepteur cupidatat cillum proident laboris do dolor do
					eiusmod sit.
				</p>
			</div>
			<div id={`Project-MidnightRising`}>
				<h2>Midnight Rising - May 2019</h2>
				<Image
					fluid
					className='d-block w-100'
					src={`https://mdbootstrap.com/img/Photos/Slides/img%20(16).jpg`}
					alt={`Tempory Image`}
				/>
				<p>
					Similarly to 'No Rest for the Martians', 'Midnight Rising'
					was the major piece of groupwork submitted for my final year
					of University. 'Midnight Rising' is a top-down wave-based
					survival game where players aim to last as long as possible
					while fighting enemy zombies which get increasingly tougher
					to combat as waves increment The group consisted of five
					members including myself, and my role within the group was
					to implement the games controls and gameplay loop using C#
					code. This involved:
				</p>
				<ul>
					<li>
						Customisable control schemes which allow the player to
						move around the enviroment.
					</li>
					<li>Support for both PC and Xbox One peripherals. </li>
					<li>
						The gameplay loop to initiate cooldown periods and
						start/stop waves.
					</li>
					<li>
						Tracking of the player's state such as their health.
					</li>
					<li>
						Dynamic Spawning of enemies so they always spawn close
						to the player but outside the camera's frustrum.
					</li>
					<li>
						The Incrementing enemy states dependant on the current
						wave number.
					</li>
					<li>
						Additional gamemodes such as 'Barrage Mode', a mode
						where enemies are even tougher and there are no cooldown
						periods between waves.
					</li>
				</ul>
			</div>
			<div id={`Project-CPUonline`}>
				<h2>CPU Online - May 2019</h2>
				<Image
					fluid
					className='d-block w-100'
					src={`https://mdbootstrap.com/img/Photos/Slides/img%20(18).jpg`}
					alt={`Tempory Image`}
				/>
				<p>
					Est dolore non amet id laboris nulla non. Dolore aliqua qui
					voluptate id aute consequat sint fugiat proident velit anim
					incididunt labore veniam. Ut consectetur tempor aliqua
					eiusmod quis ipsum excepteur esse ad est anim non magna sit.
					Ad occaecat aute sunt Lorem qui commodo reprehenderit. Magna
					Lorem exercitation labore minim in voluptate anim deserunt
					reprehenderit ad fugiat id non sit. Eu veniam commodo minim
					est aute in consectetur ex anim Lorem nulla do et eiusmod.
				</p>
			</div>
			<div id={`Project-CrazyCarnival`}>
				<h2>Crazy Carnival - May 2019</h2>
				<Image
					fluid
					className='d-block w-100'
					src={`https://mdbootstrap.com/img/Photos/Slides/img%20(20).jpg`}
					alt={`Tempory Image`}
				/>
				<p>
					Velit et mollit do qui minim esse. Occaecat tempor cillum
					aliquip fugiat veniam. Anim mollit nisi proident velit
					adipisicing ut. Velit laborum consectetur in ut ullamco eu
					esse. Enim ullamco nisi enim reprehenderit sit cupidatat
					tempor anim. Qui do consequat incididunt minim proident ut
					deserunt dolore Lorem. Magna minim in deserunt amet id ut
					commodo.
				</p>
			</div>
		</div>
	</div>
);

export default Projects;
