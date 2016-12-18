import React from 'react';
import './styles.css';

const PagesNavIconBarItem = ({children,textHidden}) => {
	return (
		<a class="link link--social link--faded" href="#">
			<i class="fa fa-twitter"/>
			<span class="text-hidden">{textHidden}</span>
		</a>
	)
}

export default PagesNavIconBarItem;