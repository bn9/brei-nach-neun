import React from 'react'
import Page from 'components/Page'
import site from './_site.json'
import GoogleMap from 'google-map-react'

const Impress = (props) => {
	const { mail, phone, address, map } = site.impressum
	return(
		<Page>
			<div
				style={{
					display:'flex',
					justifyContent:'space-between',
					flexWrap:'wrap'
				}}
			>
				<header
					style={{margin:'auto'}}
				>
					<h1>Impressum</h1>
					<p><a href={`mailto:${mail}`}>{mail} </a></p>
					<p><a href={`tel:${phone}`}>{phone}</a></p>
					<span dangerouslySetInnerHTML={{ __html: address }} />
				</header>
				<div 
					style={{
						margin:'auto',
						width:'50%',
						height:'50vh',
						minWidth:'320px',
						minHeight:'320px'
					}}
				>
					<GoogleMap
		        		defaultCenter={{lat:map.latitude,lng: map.longitude}}
		        		defaultZoom={16}
		        	>
		        		<div 
		        			style={{width:'50px',height:'50px',left:'-25px',top:'-25px',position:'absolute'}}
		        			lat={map.latitude} lng={map.longitude}>
			        		<svg
			        			viewBox={'0 0 50 50'}
			        			width="50" height="50">
			        			<circle cx="25" cy="25" r="10" stroke="#F67280" strokeWidth="5" fill="none"/>
			        		</svg>
		        		</div>
		      		</GoogleMap>
	      		</div>
	      	</div>
		</Page>
	)
}

export default Impress