import React from 'react';

const Skills = () => (
	<div>
		<hr />
		<h1 className='App-Header'>Skills</h1>
		<div style={{ marginTop: '2%', marginBottom: '2%' }}>
			<div id={`Skills-languages`}>
				<h2>Languages</h2>
				<ul>
					<li>JavaScript</li>
					<li>C#</li>
					<li>C++</li>
					<li>Java</li>
					<li>Python</li>
				</ul>
			</div>
			<div id={`Skills-librariesAndAPIs`}>
				<h2>Libraries & APIs</h2>
				<ul>
					<li>React</li>
					<li>THREE JS</li>
					<li>THREE JS</li>
					<li>CANNON JS</li>
					<li>OpenGL</li>
					<li>DirectX</li>
				</ul>
			</div>
			<div id={`Skill-softwareAndTools`}>
				<h2>Software & Tools</h2>
				<ul>
					<li>VS Code & Visual Studio</li>
					<li>Eclipse</li>
					<li>Overleaf</li>
					<li>The Adobe Suite</li>
				</ul>
			</div>
		</div>
	</div>
);

export default Skills;
