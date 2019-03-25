import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import { PagesStack } from '../components/PagesStack'
import { Nav, NavItem, SubNav } from '../components/Nav'
import { MenuButton } from '../components/MenuButton'
import useEventListener from 'use-event-listener'
import { Background } from './Background'
import './styles.css'
import 'typeface-montserrat'
import 'typeface-arvo'
import 'typeface-quicksand'

export const Layout = ({ location, ...props }) => {
  const {
    allDatoCmsPage: { nodes: pages }
  } = useStaticQuery(graphql`
    {
      allDatoCmsPage {
        nodes {
          slug
          title
          background {
            background: title
          }
        }
      }
    }
  `)

  const [open, setOpen] = React.useState(false)
  const [loaded, setLoaded] = React.useState(true)
  const toggleNavigation = () => setOpen(!open)
  const closeNavigation = () => open && setOpen(false)

  useEventListener(
    'scroll', // event to listen to
    closeNavigation // callback
  )

  console.log(props)

  return (
    <span style={{ overflowX: 'hidden', height: '100vh' }}>
      <Nav style={{ display: loaded ? 'flex' : 'none' }} open={open}>
        {Object.values(pages).map(({ slug, title }, i) => (
          <NavItem key={i} onClick={toggleNavigation} to={`/${slug}/`}>
            {title}
          </NavItem>
        ))}
        <NavItem onClick={toggleNavigation} to={`/photos/`}>
          Photos
        </NavItem>
        <SubNav>
          <NavItem
            small
            to={'/impressum/'}
            onClick={toggleNavigation}
            children="Impressum"
          />
          <NavItem
            small
            href="https://www.bildungsspender.de/?org_id=110829003"
            onClick={toggleNavigation}
            children="Bildungsspender"
          />
        </SubNav>
      </Nav>
      <PagesStack open={open} onClick={closeNavigation}>
        {props.children}
      </PagesStack>
      <MenuButton open={open} onClick={toggleNavigation} />
      <Background
        {...{
          location,
          open,
          title: props.pageContext.background || undefined
        }}
      />
    </span>
  )
}
