import React from 'react';
import { Timeline as AntTimeline } from 'antd';

const Timeline = () => (
	<div>
		<hr />
		<h2>The Road So Far</h2>
		<AntTimeline style={{ padding: '5%' }}>
			<AntTimeline.Item>
				An asteroid wipes out the dinosaurs, marking the end of the
				Cretaceous period (66 million years ago)
			</AntTimeline.Item>
			<AntTimeline.Item>I am born (1997-12-19)</AntTimeline.Item>
			<AntTimeline.Item>
				2015
				<ul>
					<li>Graduated High School with nine GCSE's</li>
					<li>
						Got my first job flipping burgers in a famous fast food
						restaurant
					</li>
				</ul>
			</AntTimeline.Item>
			<AntTimeline.Item>
				2016
				<ul>
					<li>Graduated Sixth Form with three A-Levels</li>
					<li>Began serving pints at the pub</li>
					<li>
						Started my bachelor’s degree at Northumbria University
					</li>
				</ul>
			</AntTimeline.Item>
			<AntTimeline.Item>
				2017 - 2018
				<ul>
					<li>
						Ran as a Team Captain for the Student Union's Community
						Week
					</li>
					<li>
						Acted as Treasurer for the Student Union's Farming
						society which aids the{' '}
						<a href={`https://www.ouseburnfarm.org.uk/`}>
							Ouseburn Farm charity
						</a>
						.
					</li>
					<li>
						Acted as Secretary for the Student Union's Ad-Hoc
						society
					</li>
					<li>
						I came third place whilst representing my University in{' '}
						<a href={`https://careersatnissan.co.uk/beamishwild/`}>
							Nissan's tech challenge
						</a>{' '}
						at Beamish Wild
					</li>
				</ul>
			</AntTimeline.Item>
			<AntTimeline.Item>
				2019
				<ul>
					<li>
						Will graduate Northumbria University with a First-Class
						degree (hopefully)
					</li>
				</ul>
			</AntTimeline.Item>
		</AntTimeline>
	</div>
);

export default Timeline;
