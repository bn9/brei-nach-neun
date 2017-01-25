import React from 'react';
import styled from 'styled-components';
import { media } from 'styles';

const Section = styled.section`
	z-index:100;
	pointer-events:none;
	perspective:1200px;
	perspective-origin:50% -50%;
	${ media.tablet`
		perspective-origin: 50% 100%;
	`}
`
const Figure = styled.figure`
	margin:0 auto;
	background:#ffffff;
	cursor:${props => props.open ? 'pointer' : 'default'};
	transform:${props => props.open ? 'translate3d(0, 75%, -250px)' : 'translate3d(0, 0, 0)'}
	transition:.5s ease;
`

const PagesStack = ({ onClick, open, ...props }) => {
	const style = {transform: 'translate3d(0, 75%,-250px)'}
	return (
		<Section>
			<Figure open={open} onClick={onClick}>
				{props.children}
			</Figure>
		</Section>
	)
}

export default PagesStack;