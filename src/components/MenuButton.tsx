import * as React from 'react'
/* Menu button */
import styled, { keyframes } from 'styled-components'
import { animated, useSpring } from 'react-spring'

const Button = styled.button`
  position: fixed;
  z-index: 1000;
  top: 0px;
  right: 0px;
  width: 96px;
  height: 96px;
  padding: 36px 32px;
  box-sizing: border-box;
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
  & > span {
    background: #6c5b7b;
  }
  &:hover > span {
    background: #f67280;
  }
`

const Line = styled(animated.span)`
  position: absolute;
  height: 2px;
`

const Outerline = styled(Line)`
  top: 50%;
  left: 33%;
  left: calc(100% / 3);
  width: 33%;
  width: calc(100% / 3);
  transform-origin: 50% 50%;
`

const Center = styled(Line)`
  left: 33%;
  left: calc(100% / 3);
  overflow: hidden;
  width: 33%;
  width: calc(100% / 3);
  text-indent: 200%;
  transition: opacity 0.25s;
  opacity: ${({ open }) => (open ? 0 : 1)};
`

export const MenuButton = ({ onClick, open }) => {
  const { topTransform, bottomTransform } = useSpring({
    topTransform: open
      ? 'rotateZ(45deg) translateY(0) scaleX(1)'
      : 'rotateZ(0deg) translateY(-10px) scaleX(0.8)',
    bottomTransform: open
      ? 'rotateZ(-45deg) translateY(0) scaleX(1)'
      : 'rotateZ(0deg) translateY(10px) scaleX(0.8)'
  })
  return (
    <Button {...{ onClick, open }}>
      <Outerline style={{ transform: topTransform }} />
      <Center {...{ open }}>Menu</Center>
      <Outerline style={{ transform: bottomTransform }} />
    </Button>
  )
}
