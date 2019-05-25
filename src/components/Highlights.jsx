import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Carousel, Button } from 'react-bootstrap';

const Highlights = props => {
	let carouselItems = [];
	if (props.highlights) {
		props.highlights.forEach(function(highlight, index) {
			let button = null;
			if (highlight.link) {
				button = (
					<Button
						variant='info'
						size='sm'
						as={NavLink}
						to={highlight.link}
					>
						Learn more...
					</Button>
				);
			}
			carouselItems.push(
				<Carousel.Item key={index}>
					<img
						className='d-block w-100'
						style={{ maxWidth: '100%' }}
						src={highlight.imgSrc}
						alt={highlight.imgAlt}
					/>
					<Carousel.Caption>
						<div style={{ fontWeight: 'bold' }}>
							{highlight.content}
						</div>
						{button}
					</Carousel.Caption>
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
