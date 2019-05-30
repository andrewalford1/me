import React from 'react';
import { Table, ListGroup } from 'react-bootstrap';

const DisplayGrades = props => {
	let rows = [];
	if (props.info) {
		let averageGrade = 0;
		props.info.forEach(function(data, index) {
			if (data.grade !== 'TBD') {
				rows.push(
					<tr key={index}>
						<td>{data.module}</td>
						<td>{data.grade}%</td>
					</tr>
				);
				averageGrade += data.grade;
			} else {
				rows.push(
					<tr key={index}>
						<td>{data.module}</td>
						<td>{data.grade}</td>
					</tr>
				);
			}
		});
		averageGrade /= props.info.length;
		rows.push(
			<tr key={props.info.length + 1}>
				<th>Overall</th>
				<td>{averageGrade}%</td>
			</tr>
		);
	}
	return props.info ? (
		<Table striped bordered hover size='sm'>
			<thead>
				<tr>
					<th>Module</th>
					<th width='10%'>Grade</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</Table>
	) : null;
};

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

			<DisplayGrades
				info={[
					{ module: 'Computer Fundamentals', grade: 75 },
					{ module: 'Object-Oriented Programming', grade: 96 },
					{ module: 'Procedual Programming', grade: 100 },
					{ module: 'Relational Databases', grade: 85 },
					{ module: 'Systems Analysis', grade: 74 },
					{ module: 'Web Technologies', grade: 83 }
				]}
			/>

			<h3>Year 2</h3>
			<DisplayGrades
				info={[
					{
						module: 'Computer Networks and Control Systems',
						grade: 93
					},
					{ module: 'Intelligent Systems', grade: 70 },
					{ module: 'Operating Systems and Concurrency', grade: 84 },
					{ module: 'Program Design and Development', grade: 85 },
					{ module: 'Software Engineering Practice', grade: 70 },
					{ module: 'Web Programming', grade: 90 }
				]}
			/>

			<h3>Year 3</h3>
			<DisplayGrades
				info={[
					{
						module: 'Software Architecture for Games',
						grade: 86
					},
					{ module: 'Team Project and Professionalism', grade: 60 },
					{ module: 'Games Design', grade: 71 },
					{ module: 'Computer Graphics and Animation', grade: 70.5 },
					{ module: 'Individual Computing Project', grade: 'TBD' }
				]}
			/>

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
