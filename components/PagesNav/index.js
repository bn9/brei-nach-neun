import React from 'react'

const PagesNav = ({children,open}) => {
	const style = {
		display: '-webkit-flex',
		display: 'flex',
		WebkitFlexWrap: 'wrap',
		flexWrap: 'wrap',
		WebkitJustifyContent: 'center',
		justifyContent: 'center',
		WebkitAlignItems: 'center',
		alignItems: 'center',
		padding: '20px',
		textAlign: 'center',
		background: '#0e0f0f',
		/* .js .pages-nav */
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		height: '50vh',
		padding: '30px',
		pointerEvents: 'none',
		opacity: 0,
		background: 'transparent',
		WebkitTransition: '-webkit-transform 1.2s, opacity 1.2s',
		transition: 'transform 1.2s, opacity 1.2s',
		WebkitTransitionTimingFunction: 'cubic-bezier(0.2, 1, 0.3, 1)',
		transitionTimingFunction: 'cubic-bezier(0.2, 1, 0.3, 1)',
		WebkitTransform: 'translate3d(0, 150px, 0)',
		transform: 'translate3d(0, 150px, 0)'
	}
	const openStyle = {
		pointerEvents: 'auto',
		opacity: 1,
		WebkitTransform: 'translate3d(0, 0, 0)',
		transform: 'translate3d(0, 0, 0)'
	}
	return(
		<nav
			style={open?
				Object.assign(style,openStyle):style}
		>
			{children}
		</nav>
	)
}


export default PagesNav;