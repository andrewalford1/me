import React from 'react';
import {
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBCardTitle,
	MDBCardText
} from 'mdbreact';

const Card = props => {
	let image = null;
	let title = null;
	let text = null;

	if (props.image) {
		image = (
			<MDBCardImage
				className='img-fluid'
				src={props.image.src}
				alt={props.image.alt}
				waves
			/>
		);
	}

	if (props.title) {
		title = <MDBCardTitle>{props.title}</MDBCardTitle>;
	}

	if (props.text) {
		text = <MDBCardText>{props.text}</MDBCardText>;
	}

	return (
		<MDBCard>
			{image}
			<MDBCardBody>
				{title}
				{text}
				{props.button}
			</MDBCardBody>
		</MDBCard>
	);
};

export default Card;
