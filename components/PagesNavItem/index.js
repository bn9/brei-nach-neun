import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import { media } from 'styles';

const Wrapper = styled.div`
	padding:${props => props.small ? '0 24px' : '0 4px'};
	${ media.tablet`
		width:${props => props.small ? 'auto' : '100%'};
		flex:1;
	`};
	${ media.desktop`
		width:${props => props.small ? 'auto' : 'calc( 100% / 3 )'};
		max-width:320px;
	`}
`

const NavLink = styled(
	({small,...props}) => <Link {...props}/>)`
	font-weight: bold;
	position: relative;
	letter-spacing: 1px;
	text-transform: uppercase;
	text-decoration: none;
	color:#6C5B7B;
	&:hover,
	&:focus{
		color:#F67280
	}
	${props => props.small ? `
		font-size:14px;
		color: #C06C84;
	` : `
	&::before{
		content: '';
		position: absolute;
		top: 100%;
		left: 50%;
		width:80px;
		max-width: 100%;
		height: 2px;
		margin: 5px 0 0 -40px;
		background: #F67280;
		transition: transform 0.3s;
		transform: scale3d(0, 1, 1);
	}`}
	&:hover:before {
		transform: scale3d(1, 1, 1);
	}
`

const PagesNavItem = ({children,to,onClick,small}) => {
	return(
		<Wrapper small={small}>
			<NavLink
				small={small}
				onClick={onClick}
				to={to}>
				{children}
			</NavLink>
		</Wrapper>
	)
}

export default PagesNavItem;