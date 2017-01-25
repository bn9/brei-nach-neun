import React from 'react';
import styled from 'styled-components';

const colors = [
	'#F8B195',
	'#F67280',
	'#C06C84',
	'#6C5B7B',
	'#84b5bd'
]

const Path = styled.path`
	fill: none;
	stroke-miterlimit: 3;
	stroke-linecap: butt;
	stroke-linejoin: bevel;
	stroke: ${ props => colors[props.color -1] };
`
export default Path;