import React from 'react'
import styled from 'styled-components';
import { media } from 'styles';

const PagesNav = styled.nav`
	display:flex;
	justify-content:center;
	align-items:center;
	
	text-align:center;
	background:#0e0f0f;
	position:fixed;
	top:0;
	left:0;
	width:100%;
	pointer-events: ${ props => props.open ? 'auto' : 'none'};
	opacity:${ props => props.open ? 1 : 0};
	background:rgba(0,0,0,0);
	transition: transform 1.2s, opacity 1.2s;
	transition-timing-function: cubuc-bezier(.2, 1, .3, 1);
	transform:${ props => props.open ? 'translate3d(0, 0, 0)' : 'translate3d(0, 150px, 0)'};

	flex-wrap:wrap;
	flex-direction:row;
	height:50vh;
	padding:64px 8px 32px 8px;
	${ media.tablet`
		flex-direction:column;
		height:80vh;
	`}
`

export default PagesNav;