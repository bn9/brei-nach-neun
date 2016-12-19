import React from 'react';
import Helmet from 'react-helmet'
import { config } from 'config'
import Page from 'components/Page';
import Gallery from 'react-photo-gallery';
import photos from './_photos.json';

class Photos extends React.Component {
	render(){
		return(
			<Page>
				<Helmet
	            	title={`${config.siteTitle} | Photos`}
	          	/>
				<h1>Photos</h1>
				<Gallery
					photos={ 
						Object.keys(photos).map( 
							photo => {
								const { url,width,height } = photos[photo].img
								const aR = [width,height]
								const aspectRatio = aR[0]/aR[1]
								return {
									src: url+'&h=300',
									width: height/300*width,
									height: 300,
								    aspectRatio: aspectRatio,
								    lightboxImage:{
								    	src: url,
								    	srcset: [
									    	`${url}&w=1024 1024w`,
									    	`${url}&w=800 800w`,
									    	`${url}&w=500 500w`,
									    	`${url}&w=320 320w`
								    	]
							    	}
							  	}
							}
						)
					}
				/>
			</Page>
		)
	}
}

export default Photos;