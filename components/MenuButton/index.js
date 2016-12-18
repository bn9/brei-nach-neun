import React from 'react';
import styles from './styles.css';

const MenuButton = ({onClick,open}) => {
	return(
		<button 
			onClick={onClick} 
			className={
				`menu-button${open?' menu-button--open':''}`}
		>
			<span>Menu</span>
		</button>
	)}


export default MenuButton;