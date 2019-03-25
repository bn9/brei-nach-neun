import React, { Component } from 'react'
import { Page } from '../components/Page'
import { graphql } from 'gatsby'
import GoogleMap from 'google-map-react'
import { letters, Path, Svg } from '../components/AnimatedTitle'
import { media } from '../styles'
import styled from 'styled-components'
import { withPageTemplate } from '../templates/page'
import ReactMapGL, { Marker } from 'react-map-gl'

const Icon = props => (
  <svg viewBox="0 0 1336 200" width="200px">
    {letters.map((item, i) => (
      <g
        key={i}
        className={`letter letter--${i + 1}${
          item.className ? ' ' + item.className : ''
        }`}>
        <g className="letter__part">
          <Path
            strokeWidth="15px"
            transform={typeof item.t != 'undefined' ? item.t : ''}
            color={item.c[2]}
            d={item.d}
          />
        </g>
      </g>
    ))}
  </svg>
)

const ImpressWrapper = styled.div`
  display: flex;
  justif-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;
  padding-bottom: 32px;
  ${media.desktop`
        flex-direction:row;
      `}
`

const ImpressMap = ({ lat, lng }) => {
  const position = [51.505, -0.09]

  return (
    <ReactMapGL
      mapboxApiAccessToken={process.env.GATSBY_MAPBOXACCESSTOKEN}
      width="100%"
      height="100%"
      latitude={lat}
      longitude={lng}
      zoom={15}>
      <Marker latitude={lat} longitude={lng}>
        <div
          style={{
            width: '50px',
            height: '50px',
            left: '-25px',
            top: '-25px',
            position: 'absolute'
          }}>
          <svg viewBox={'0 0 50 50'} width="50" height="50">
            <circle
              cx="25"
              cy="25"
              r="10"
              stroke="#F67280"
              strokeWidth="5"
              fill="none"
            />
          </svg>
          <Icon />
        </div>
      </Marker>
    </ReactMapGL>
  )
}

const Impressum = ({
  data: {
    datoCmsImpressum: { mail, phone, address, map }
  },
  ...props
}) => {
  return (
    <ImpressWrapper>
      <header style={{ margin: 'auto', paddingBottom: '32px' }}>
        <h1>Impressum</h1>
        <p>
          <a href={`mailto:${mail}`}>{mail} </a>
        </p>
        <p>
          <a href={`tel:${phone}`}>{phone}</a>
        </p>
        <span dangerouslySetInnerHTML={{ __html: address }} />
      </header>
      <div
        style={{
          margin: 'auto',
          width: '50%',
          height: '50vh',
          minWidth: '320px',
          minHeight: '320px'
        }}>
        <ImpressMap lat={map.latitude} lng={map.longitude} />
      </div>
      <footer style={{ width: '100%', textAlign: 'center' }}>
        <a href="https://www.netlify.com">
          <img src="https://www.netlify.com/img/global/badges/netlify-light.svg" />
        </a>
      </footer>
    </ImpressWrapper>
  )
}

export default withPageTemplate(Impressum)

export const query = graphql`
  {
    datoCmsImpressum {
      mail
      phone
      address
      map {
        latitude
        longitude
      }
    }
  }
`
