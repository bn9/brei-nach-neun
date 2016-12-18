import React from 'react';

const PagesNavIconBar = ({children}) => {
	return (
		<div 
			style={{
				width: '100%',
				opacity: 0,
				WebkitTransition:' -webkit-transform 1.2s, opacity 1.2s',
				transition: 'transform 1.2s, opacity 1.2s',
				WebkitTransitionTimingFunction: 'cubic-bezier(0.2, 1, 0.3, 1)',
				transitionTimingFunction: 'cubic-bezier(0.2, 1, 0.3, 1)',
				WebkitTransform: 'translate3d(0, 20px, 0)',
				transform: 'translate3d(0, 20px, 0)',
			}}
			children={children}
		/>
	)
}

export default PagesNavIconBar;