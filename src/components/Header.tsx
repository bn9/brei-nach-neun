import * as React from 'react'
import { default as AnimatedTitle } from './AnimatedTitle'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.header`
  background: #ffffff;
  padding: 40px;
`

export const Header = () => {
  return (
    <Wrapper>
      <Link to='/'>
        <AnimatedTitle />
      </Link>
    </Wrapper>
  )
}
