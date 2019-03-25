import * as React from 'react'
import styled from 'styled-components'
import { media } from '../styles'

const Section = styled.section`
  z-index: 100;
  pointer-events: none;
  perspective: 1200px;
  perspective-origin: 50% 0%;
  ${media.tablet`
    perspective-origin: 50% 100%;
  `}
`
const Figure = styled.figure`
  margin: 0 auto;
  background: #ffffff;
  cursor: ${({ open }) => (open ? 'pointer' : 'default')};
  transform: ${({ open }) => {
    const y = '55vh'
    return open ? `translate3d(0, ${y}, -250px)` : 'translate3d(0, 0, 0)'
  }};
  transition: ${({ duration = 500 }) => duration}ms ease;
`

export const PagesStack = ({ onClick, open, ...props }) => {
  return (
    <Section>
      <Figure {...{ onClick, open }}>{props.children}</Figure>
    </Section>
  )
}
