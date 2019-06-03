import * as React from 'react'
import styled from 'styled-components'
import { media } from '../styles'
import { Header } from './Header'
import useEventListener from 'use-event-listener'

const Wrapper = styled.section`
  pointer-events: none;
  perspective: 1200px;
  perspective-origin: 50% 0%;
  ${media.tablet`
    perspective-origin: 50% 100%;
  `}
`
const Section = styled.section`
  pointer-events: all;
  margin: 0 auto;
  background: #ffffff;
  cursor: ${({ open }) => (open ? 'pointer' : 'default')};
  transform: ${({ open }) => {
    const y = '55vh'
    return open ? `translate3d(0, ${y}, -250px)` : 'translate3d(0, 0, 0)'
  }};
  transition: ${({ duration = 500 }) => duration}ms ease;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  width: 100%;
  min-height: 100vh;
`

export const PagesStack = ({ onClick, open, ...props }) => {
  return (
    <Wrapper>
      <Section {...{ onClick, open }}>
        <Header />
        {props.children}
      </Section>
    </Wrapper>
  )
}
