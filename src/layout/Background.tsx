import styled from 'styled-components'
import * as React from 'react'
import { useTransition } from 'react-spring'
import { useStaticQuery, graphql } from 'gatsby'

function useTimeout(
  { callback, duration },
  deps?: ReadonlyArray<any> | undefined
) {
  React.useEffect(() => {
    const timeout = setTimeout(callback, duration)
    return () => {
      clearTimeout(timeout)
    }
  }, deps)
}

export function usePrevious(value) {
  const ref = React.useRef()
  React.useEffect(() => {
    ref.current = value
  })
  return ref.current
}

const StyledBackground = styled.span`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: #ffffff;
  background-image: ${({ src }) => `url('${src}')`};
  transition: background-image 0ms ease 300ms;
  z-index: -1;
  opacity: 0.25;
`

const getRandom = max => Math.floor(Math.random() * Math.floor(max))

export const Background = ({ title, location, open, ...props }) => {
  const {
    backgrounds: { nodes }
  } = useStaticQuery(graphql`
    {
      backgrounds: allDatoCmsBackground {
        nodes {
          title
          img {
            url
            resolutions {
              src
            }
          }
        }
      }
    }
  `)
  const index = title
    ? nodes.findIndex(({ title: nodeTitle }) => nodeTitle === title)
    : getRandom(nodes.length)

  const [src, set] = React.useState(nodes[index].img.resolutions.src)

  const prev = usePrevious(location.pathname)

  const random = getRandom(nodes.length)
  useTimeout(
    {
      callback: () =>
        !open &&
        location.pathname !== prev &&
        set(nodes[random].img.resolutions.src),
      duration: 500
    },
    [location.pathname]
  )

  return <StyledBackground {...{ src, ...props }} />
}
