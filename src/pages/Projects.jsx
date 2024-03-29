import React from 'react';
import { Image } from 'react-bootstrap';

const Projects = () => (
	<div>
		<hr />
		<h1 className='App-Header'>Projects</h1>
		<div style={{ marginTop: '2%', marginBottom: '2%' }}>
			<div id={`Project-NoRestFortheMartians`}>
				<h2>No Rest for the Martians - May 2017</h2>
				<Image
					fluid
					className='d-block w-100'
					style={{ paddingBottom: '2%' }}
					src={`./res/img/projects/no_rest_for_the_martians.jpg`}
					alt={`Screen shot from 'No Rest for the Martians'`}
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
						Providing dialogue for the enemy characters within the
						game.
					</li>
					<li>
						Using C++ to script functional doors which open/close in
						response to the player's actions within the game.
					</li>
					<li>
						Using C++ to create reusable and customisable 'pick-up'
						items which affect the player's stats.
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
					style={{ paddingBottom: '2%' }}
					src={`./res/img/projects/galaxy_adventure.jpg`}
					alt={`Screen shot from 'Galaxy Adventure'`}
				/>
				<p>
					Using Mr Doobs THREE JS library I created 'Galaxy
					Adventure', an interactive VR application for both mobile
					and desktop devices. Two version of the project exist. The
					main application, which allows the user to sit inside their
					propeller plane and explore the galaxy, and the Object
					Viewer which enables users to view and interact with each
					individual object create for the project. Interesting
					concepts from this project included:
				</p>
				<ul>
					<li>Creating 3D models in THREE JS</li>
					<li>
						Creating particle effects for volcanic eruptions on the
						lava planet.
					</li>
					<li>
						Programming planets to orbit around the sun at various
						speeds.
					</li>
					<li>Implementing VR into the project.</li>
				</ul>
				<div>
					Check out the main project{' '}
					<a href='http://unn-w16006135.newnumyspace.co.uk/KF6018_Assignment_1/project/'>
						Here!
					</a>{' '}
					<i>(Requires VR device)</i>
				</div>
				<div>
					Check out the Object Viewer{' '}
					<a href='http://unn-w16006135.newnumyspace.co.uk/KF6018_Assignment_1/project/object_viewer.html'>
						Here!
					</a>
				</div>
			</div>
			<div id={`Project-ChristmasConundrum`}>
				<h2>Christmas Conundrum - December 2018</h2>
				<Image
					fluid
					className='d-block w-100'
					style={{ paddingBottom: '2%' }}
					src={`./res/img/projects/christmas_game.jpg`}
					alt={`Screen shot from 'Christmas Conundrum'`}
				/>
				<p>
					'Christmas Conundrum' is a small game coded using C++ where
					the player can take control of Santa who can kick, punch,
					and throw deadly exploding presents. It was created to
					showcase a game engine created as part of my studies at
					Northumbria University. The engine is built off the
					Universities 'Shell Engine', which is powered by Direct X.
					My additions to the engine include:
				</p>
				<ul>
					<li>
						A component-based architecture to customise game
						entities so that they are lowly coupled but maintain
						high cohesion. This method removes many of the burdens
						often caused by traditional Object-Oriented programming.
					</li>
					<li>An object manager to manage all game entities.</li>
					<li>
						Loading sprites through sprite sheets and animating
						them.
					</li>
					<li>Music and sound effects.</li>
					<li>Collision detection and handling</li>
					<li>
						A tiling system to create complex and randomly generated
						backdrops for the game.
					</li>
				</ul>
			</div>
			<div id={`Project-MidnightRising`}>
				<h2>Midnight Rising - May 2019</h2>
				<Image
					fluid
					className='d-block w-100'
					style={{ paddingBottom: '2%' }}
					src={`./res/img/projects/midnight_rising.jpg`}
					alt={`Screen shot from 'Midnight Rising'`}
				/>
				<p>
					Similar to 'No Rest for the Martians', 'Midnight Rising' was
					the major piece of groupwork submitted for my final year of
					University. 'Midnight Rising' is a top-down wave-based
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
						move around the environment.
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
			<div id={`Project-CrazyCarnival`}>
				<h2>Crazy Carnival - May 2019</h2>
				<Image
					fluid
					className='d-block w-100'
					style={{ paddingBottom: '2%' }}
					src={`./res/img/projects/crazy_carnival.jpg`}
					alt={`Screen shot from the 'Crazy Carnival'`}
				/>
				<p>
					Just like 'Galaxy Adventure', 'Crazy Carnival' uses THREE JS
					to create an interactive animated scene. This time the user
					is able to explore the environment through a Microsoft
					Kinect via a kinectron server. Using URL parameters, the
					project can be ran using either the kinect or a mouse and
					keyboard. 'Carzy Carnival' is a much larger project than
					'Galaxy Adventure' as it was created alongside three other
					students. Interesting concepts from this project included:
				</p>
				<ul>
					<li>
						Moving around an environment using a Microsoft Kinect as
						a peripheral.
					</li>
					<li>
						Playing interactive games, via gesture tracking, using the Microsoft Kinect
						such as:
						<ul>
							<li>Bowling</li>
							<li>Football</li>
							<li>Strength-O-Meter</li>
							<li>Whack-A-Mole</li>
						</ul>
					</li>
					<li>Loading rigged and animated 3D Models using JSON.</li>
					<li>
						Implementing a loading screen which dynamically displays
						loading data in real-time.
					</li>
					<li>Real-time physics simulation using CANNON JS.</li>
				</ul>
				<div>
					Check out the project{' '}
					<a href='http://unn-w16006135.newnumyspace.co.uk/carnival_project/?useKinect=0&ip=192.168.60.56'>
						Here!
					</a>
				</div>
			</div>
			<div id={`Project-CPUonline`}>
				<h2>CPU Online - May 2019</h2>
				<Image
					fluid
					className='d-block w-100'
					style={{ paddingBottom: '2%' }}
					src={`./res/img/projects/cpu_online.jpg`}
					alt={`Screen shot from 'CPU Online'`}
				/>
				<p>
					Being my Undergraduate Dissertation, CPU Online is the
					biggest project I have completed to date. During my first
					year of University I learnt basic computer architecture on
					JASPer, a tool which has not received an update since 2003.
					After researching online, there is a big gap in the market
					for modernised CPU simulators. CPU Online is currently under
					consideration to replace JASPer, the current teaching tool
					being used at Northumbria University as it implements the
					following features to streamline CPU teaching:
				</p>
				<ul>
					<li>
						Available anywhere to anyone as it is hosted on the
						Internet.
					</li>
					<li>Visualised and interactive registers and memory.</li>
					<li>
						Real-time visualisation of the 'Fetch, Decode, and
						Execute' cycle.
					</li>
					<li>
						Animations to show the interactions occurring on the
						CPU.
					</li>
					<li>
						Its own text-editor, assembly language, and assembler to
						allow users to write programs and assemble them without
						having to use external tools.
					</li>
					<li>
						A console which will show the state of the CPU and
						accept incoming commands.
					</li>
					<li>
						GUI elements to play, pause, speed up, slow down, or
						step through executing programs.
					</li>
				</ul>
				<div>
					Check out the project{' '}
					<a href='http://unn-w16006135.newnumyspace.co.uk/cpu/build/'>
						Here!
					</a>
				</div>
			</div>
		</div>
	</div>
);

export default Projects;
