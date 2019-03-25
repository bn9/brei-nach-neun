import * as React from 'react'
import { Link } from 'gatsby'
import AnimatedTitle from './AnimatedTitle'
import styled from 'styled-components'
import { media } from '../styles'

const Section = styled.section`
  position: relative;
  background: #ffffff;
  z-index: 5;
  width: 100%;
  min-height: 100vh;
  pointer-events: auto;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.1);
`
const Header = styled.header`
  background: #ffffff;
  padding: 40px;
`
const PageWrapper = styled.span`
  width:100%;
  margin:auto;
  background:#ffffff;
  padding:24px 32px;
  & > *:not(h1) {
    max-width:800px;
    margin:0 auto 0 auto;
  }
  ${media.tablet`
    padding:24px 48px 56px 48px;
  `}
  ${media.desktop`
    padding:24px 96px 56px 96px;
  `}
  ${media.portrait`
    padding:16px 32px;
  `}
`
export const Page: React.SFC<{}> = ({ children }) => (
  <Section>
    <Header>
      <Link to="/">
        <AnimatedTitle />
      </Link>
    </Header>
    <PageWrapper>{children}</PageWrapper>
  </Section>
)
