import React from 'react';
import Imgix from 'react-imgix';

const GalleryItem = ({src}) => {
	return(
		<figure
			style={{
				width:'100px',
				height:'100px',
			}}
		>
			<Imgix src={src} type='picture'>
	  			<Imgix src={src} width={600} height={400} type='source' imgProps={{media: '(min-width: 768px)'}}/>
	  			<Imgix src={src} width={600} height={400} type='source' imgProps={{media: '(min-width: 320px)'}}/>
	  			<Imgix 
	  				style={{display:'flex'}}
	  				src={src} width={600} height={400} type='img' />
			</Imgix>
		</figure>
	)
}

export default GalleryItem;