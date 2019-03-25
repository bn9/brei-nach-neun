import * as React from 'react'
/* Menu button */
import styled, { keyframes } from 'styled-components'

const Button = styled.button`
  position: absolute;
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

  .no-js & {
    display: none;
  }

  &::before,
  &::after,
  & span {
    background: #6c5b7b;
  }

  &:hover::before,
  &:hover::after,
  &:hover span,
  & span:hover {
    background: #f67280;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 33%;
    left: calc(100% / 3);
    width: 33%;
    width: calc(100% / 3);
    height: 2px;
    pointer-events: none;
    -webkit-transition: -webkit-transform 0.25s;
    transition: transform 0.25s;
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }

  & span {
    position: absolute;
    left: 33%;
    left: calc(100% / 3);
    overflow: hidden;
    width: 33%;
    width: calc(100% / 3);
    height: 2px;
    text-indent: 200%;
    -webkit-transition: opacity 0.25s;
    transition: opacity 0.25s;
    opacity: ${({ open }) => (open ? 0 : 1)};
  }

  &::before {
    transform: ${({ open }) =>
      open
        ? 'rotate3d(0, 0, 1, 45deg)'
        : 'translate3d(0, -10px, 0) scale3d(0.8, 1, 1)'};
  }

  &::after {
    transform: ${({ open }) =>
      open
        ? 'rotate3d(0, 0, 1, -45deg)'
        : 'translate3d(0, 10px, 0) scale3d(0.8, 1, 1)'};
  }
`

export const MenuButton = ({ onClick, open }) => {
  return (
    <Button {...{ onClick, open }}>
      <span>Menu</span>
    </Button>
  )
}
