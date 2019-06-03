import * as React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { withPageTemplate } from '../templates/page'

interface PhotoPageProps {
  pageContext: any
  data: {
    site: { siteMetadata: { siteTitle: string } }
    allDatoCmsPhoto: {
      edges: {
        node: { id: string; img: { width: number; height: number; fluid: any } }
      }[]
    }
  }
}

const PhotoPage: React.SFC<PhotoPageProps> = ({ data: { site, allDatoCmsPhoto } }) => {
  const photos = allDatoCmsPhoto.edges.map(({ node: { id: key, img } }) => ({
    key,
    src: img.fluid.src,
    width: img.width,
    height: img.height,
    fluid: img.fluid
  }))
  return (
    <>
      <h1>Photos</h1>
      {allDatoCmsPhoto.edges.map(({ node: { id: key, img: { fluid } } }) => (
        <Image {...{ key, fluid }} />
      ))}
    </>
  )
}

export default withPageTemplate<PhotoPageProps>(PhotoPage)

export const query = graphql`
  {
    site {
      siteMetadata {
        siteTitle
      }
    }
    allDatoCmsPhoto {
      edges {
        node {
          id
          title
          img {
            width
            height
            fluid(maxWidth: 800, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`
