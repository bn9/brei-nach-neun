import React from 'react';
import { Link } from 'react-router';
import styles from './styles.css'

const PagesNavItem = ({children,to,onClick,small}) => {
	const style = {
		width: '33%',
		padding: '1em',
		padding: '0 4px'
	}
	return(
		<div
			style={style}
		>
			<Link 
				onClick={onClick}
				to={to}
				className={`link link__page${small?' link--faded':''}`}
			>{children}</Link>
		</div>
	)
}

export default PagesNavItem;