import React from 'react';
import { MDBIcon, MDBBtn, MDBBtnGroup } from 'mdbreact';
import '../style/App.css';

const Footer = () => (
	<footer className='App-Footer'>
		<hr />
		<div style={{ paddingBottom: '5%' }}>Andrew Alford 2019</div>
		<div style={{ paddingBottom: '5%' }}>
			<a href={'mailto: andrewalford1@outlook.com'}>
				andrewalford1@outlook.com
			</a>
		</div>
		<div style={{ paddingBottom: '5%' }}>
			<a href={'./res/pdf/cv_june_2019.pdf'}>Download CV</a>
		</div>
		<div style={{ paddingBottom: '5%' }}>
			<MDBBtnGroup size='sm' className='mb-4'>
				<MDBBtn
					social='git'
					color='dark'
					href={'https://github.com/andrewalford1'}
				>
					<MDBIcon fab icon='github' className='pr-1' /> Github
				</MDBBtn>
				<MDBBtn
					social='li'
					color='indigo'
					href={
						'https://www.linkedin.com/in/andrew-alford-479155152/'
					}
				>
					<MDBIcon fab icon='linkedin-in' className='pr-1' /> Linkedin
				</MDBBtn>
				<MDBBtn
					social='yt'
					color='danger'
					href={
						'https://www.youtube.com/channel/UCLl-yUIOAfNw_8I6iDZ8drg'
					}
				>
					<MDBIcon fab icon='youtube' className='pr-1' /> Youtube
				</MDBBtn>
			</MDBBtnGroup>
		</div>
	</footer>
);

export default Footer;
