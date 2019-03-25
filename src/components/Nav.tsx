import * as React from 'react'
import styled from 'styled-components'
import { media } from '../styles'
import { Link } from 'gatsby'

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  background: #0e0f0f;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: ${props => (props.open ? 'auto' : 'none')};
  opacity: ${props => (props.open ? 1 : 0)};
  background: rgba(0, 0, 0, 0);
  transition: transform 1.2s, opacity 1.2s;
  transition-timing-function: cubuc-bezier(0.2, 1, 0.3, 1);
  transform: ${props =>
    props.open ? 'translate3d(0, 0, 0)' : 'translate3d(0, 150px, 0)'};

  flex-wrap: wrap;
  flex-direction: row;
  height: 50vh;
  padding: 64px 8px 32px 8px;
  ${media.tablet`
    flex-direction:column;
    height:80vh;
  `}
`

export const SubNav = styled.nav`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

/*
 *
 *
 */

const Wrapper = styled.div`
  padding: ${props => (props.small ? '0 24px' : '0 4px')};
  ${media.tablet`
    width:${props => (props.small ? 'auto' : '100%')};
    flex:1;
  `};
  ${media.desktop`
    width:${props => (props.small ? 'auto' : 'calc( 100% / 3 )')};
    max-width:320px;
  `}
`

const NavLink = styled(props =>
  props.to ? <Link {...props} /> : <a target="_blank" {...props} />
)`
  font-weight: bold;
  position: relative;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  color: #6c5b7b;
  &:hover,
  &:focus,
  &[aria-current] {
    color: #f67280;
  }
  ${props =>
    props.small
      ? `
    font-size:14px;
    color: #C06C84;
  `
      : `
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

export const NavItem = ({ children, ...props }) => {
  return (
    <Wrapper small={props.small}>
      <NavLink {...props}>{children}</NavLink>
    </Wrapper>
  )
}

/*
 *
 *
 */

export const NavIconBar = styled.div`
  width: 100%;
  opacity: 0;
  transition: transform 1.2s, opacity 1.2s;
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  transform: translate3d(0, 20px, 0);
`
