import React from 'react';


const PagesStack = ({open,...props}) => {
const style = {transform: 'translate3d(0, 75%,-250px)'}
	return (
		<section 
			style={{
				/* .js .pages-stack */
				zIndex: '100',
				pointerEvents: 'none',
				WebkitPerspective: '1200px',
				perspective: '1200px',
				WebkitPerspectiveOrigin: '50% -50%',
				perspectiveOrigin: '50% -50%',
			}}
		>
			<figure
				style={{
					margin:'0 auto',
					background:'#ffffff',
					transform:`translate3d(0, ${open?'75%':0},${open?'-250px':'0px'})`,
					transition:'.5s ease',
				}}
			>
			{props.children}
			</figure>
		</section>
			)
}

export default PagesStack;