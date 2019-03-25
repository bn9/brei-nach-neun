import * as React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { withPageTemplate } from '../templates/page'
import Gallery from 'react-photo-gallery'

const ImageComponent = ({ fluid }) => <Image {...{ fluid }} />

const PhotoPage = ({ data: { site, allDatoCmsPhoto } }) => {
  const photos = allDatoCmsPhoto.edges.map(({ node: { id: key, img } }) => ({
    key,
    src: img.fluid.src,
    width: img.width,
    height: img.height,
    fluid: img.fluid
  }))
  return (
    <React.Fragment>
      <h1>Photos</h1>
      <Gallery {...{ photos }} />
    </React.Fragment>
  )
}

export default withPageTemplate(PhotoPage)

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
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`
