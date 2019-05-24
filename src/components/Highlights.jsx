import React from 'react';
import { Carousel } from 'react-bootstrap';

const Highlights = props => {
	let carouselItems = [];
	if (props.highlights) {
		props.highlights.forEach(function(highlight, index) {
			carouselItems.push(
				<Carousel.Item key={index}>
					<img
						className='d-block w-100'
						src={highlight.imgSrc}
						alt={highlight.imgAlt}
					/>
					<Carousel.Caption>{highlight.content}</Carousel.Caption>
				</Carousel.Item>
			);
		});
	}
	return props.highlights ? (
		<div>
			<Carousel>{carouselItems}</Carousel>
		</div>
	) : null;
};

export default Highlights;
