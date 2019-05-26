import React from 'react';
import { ButtonGroup, Button, Container, Row, Col } from 'react-bootstrap';
import { Icon, Divider } from 'antd';
import '../style/App.css';

const Footer = () => (
	<footer className='App-Footer'>
		<hr />
		<div style={{ paddingBottom: '5%' }}>Andrew Alford 2019</div>
		<div style={{ paddingBottom: '5%' }}>
			<Icon type='mail' /> andrewalford1@outlook.com
		</div>
		<div style={{ paddingBottom: '5%' }}>
			<ButtonGroup size='lg'>
				<Button
					variant='primary'
					size='lg'
					href={'https://github.com/andrewalford1'}
				>
					<div>
						<Icon type='github' />
					</div>
				</Button>
				<Button
					variant='primary'
					size='lg'
					href={
						'https://www.linkedin.com/in/andrew-alford-479155152/'
					}
				>
					<div>
						<Icon type='linkedin' />
					</div>
				</Button>
				<Button
					variant='primary'
					size='lg'
					href={
						'https://www.youtube.com/channel/UCLl-yUIOAfNw_8I6iDZ8drg'
					}
				>
					<div>
						<Icon type='youtube' />
					</div>
				</Button>
			</ButtonGroup>
		</div>
	</footer>
);

export default Footer;
