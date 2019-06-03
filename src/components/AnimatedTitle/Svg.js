import styled from 'styled-components';
import { media } from '../../styles'

const Svg = styled.svg`
	max-width: calc(1336px/2.5);
	${media.desktop`
	 height: 80px;
	 max-height:80px;
`}

`

export default Svg;