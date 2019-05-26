import React from 'react';
import { Table, ListGroup } from 'react-bootstrap';

const Qualifications = () => (
	<div>
		<hr />
		<h1 className='App-Header'>Qualifications</h1>

		<div>
			<h2>
				Bachelor of Science (Honours) in Computer Science at Northumbria
				University 2016-2019
			</h2>
			<h3>Year 1</h3>
			<Table striped bordered hover size='sm'>
				<thead>
					<tr>
						<th>Module</th>
						<th width='10%'>Grade</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Computer Fundamentals</td>
						<td>75%</td>
					</tr>
					<tr>
						<td>Object-Oriented Programming</td>
						<td>96%</td>
					</tr>
					<tr>
						<td>Procedual Programming</td>
						<td>100%</td>
					</tr>
					<tr>
						<td>Relational Databases</td>
						<td>85%</td>
					</tr>
					<tr>
						<td>Systems Analysis</td>
						<td>74%</td>
					</tr>
					<tr>
						<td>Web Technologies</td>
						<td>83%</td>
					</tr>
					<tr>
						<th>Overall</th>
						<td>85.5%</td>
					</tr>
				</tbody>
			</Table>

			<h3>Year 2</h3>
			<Table striped bordered hover size='sm'>
				<thead>
					<tr>
						<th>Module</th>
						<th width='10%'>Grade</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Computer Networks and Control Systems</td>
						<td>93%</td>
					</tr>
					<tr>
						<td>Intelligent Systems</td>
						<td>70%</td>
					</tr>
					<tr>
						<td>Operating Systems and Concurrency</td>
						<td>84%</td>
					</tr>
					<tr>
						<td>Program Design and Development</td>
						<td>85%</td>
					</tr>
					<tr>
						<td>Software Engineering Practice</td>
						<td>70%</td>
					</tr>
					<tr>
						<td>Web Programming</td>
						<td>90%</td>
					</tr>
					<tr>
						<th>Overall</th>
						<td>82%</td>
					</tr>
				</tbody>
			</Table>

			<h3>Year 3</h3>
			<Table striped bordered hover size='sm'>
				<thead>
					<tr>
						<th>Module</th>
						<th width='10%'>Grade</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Software Architecture for Games</td>
						<td>86%</td>
					</tr>
					<tr>
						<td>Team Project and Professionalism</td>
						<td>TBC</td>
					</tr>
					<tr>
						<td>Games Design 71%</td>
						<td>TBC</td>
					</tr>
					<tr>
						<td>Computer Graphics and Animation</td>
						<td>70.5%</td>
					</tr>
					<tr>
						<td>Individual Computing Project</td>
						<td>TBC</td>
					</tr>
					<tr>
						<th>Overall</th>
						<td>75.8%</td>
					</tr>
				</tbody>
			</Table>

			<h2>Other Qualifications</h2>
			<ListGroup>
				<ListGroup.Item>
					A-Level Computer Science Grade B
				</ListGroup.Item>
				<ListGroup.Item>
					A-Level Computer Science Grade B
				</ListGroup.Item>
				<ListGroup.Item>
					A-Level Computer Science Grade B
				</ListGroup.Item>
				<ListGroup.Item>
					9 GCSE's including Maths, English, and Science
				</ListGroup.Item>
			</ListGroup>
		</div>
	</div>
);

export default Qualifications;
