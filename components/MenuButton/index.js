import React from 'react';
import styled, { keyframes } from 'styled-components';
import styles from './styles.css'
const MenuButton = ({onClick,open}) => {
	return(
		<button
			className={`menu-button${open?' menu-button--open':''}`}
			onClick={onClick} 
		>
			<span>Menu</span>
		</button>
	)}


export default MenuButton;