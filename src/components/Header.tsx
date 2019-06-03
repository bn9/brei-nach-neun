import * as React from 'react'
import { default as AnimatedTitle } from './AnimatedTitle'
import { navigate } from 'gatsby'
import styled from 'styled-components'
import { media } from '../styles'

const Wrapper = styled.header`
  background: #ffffff;
  box-sizing: border-box;
  ${media.desktop`
    padding:40px;
    height: 160px;
  `}
  ${media.tablet`padding:20px;`}
`

export const Header = () => {
  return (
    <Wrapper>
      <AnimatedTitle onClick={() => navigate('/')} />
    </Wrapper>
  )
}
