import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { Icon } from 'antd';
import '../style/App.css';

const Footer = () => (
	<footer className='App-Footer'>
		<hr />
		<div style={{ paddingBottom: '5%' }}>Andrew Alford 2019</div>
		<div style={{ paddingBottom: '5%' }}>
			<Icon type='mail' />
			<Button variant='link' href={'mailto: andrewalford1@outlook.com'}>
				andrewalford1@outlook.com
			</Button>
		</div>
		<div style={{ paddingBottom: '5%' }}>
			<ButtonGroup size='lg'>
				<Button
					variant='primary'
					href={'https://github.com/andrewalford1'}
				>
					<div>
						<Icon type='github' />
					</div>
				</Button>
				<Button
					variant='primary'
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
