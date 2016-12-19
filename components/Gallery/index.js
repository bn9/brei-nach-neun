import React from 'react'

class Gallery extends React.Component{
	render(){
		return(
			<div 
				style={{
					display:'flex'
				}}
			>
				{this.props.children}
			</div>
		)
	}
}

export default Gallery;