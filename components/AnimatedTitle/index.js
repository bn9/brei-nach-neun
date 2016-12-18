import React from 'react';
import styles from './styles.css'
import anime from 'animejs'
import Phrase from './animate.js'
class AnimatedTitle extends React.Component{
	
	componentDidMount(){
		var svgFx1 = document.querySelector('.letters--effect-1')
				
		const phrase1 = new Phrase(svgFx1, {
			pathOpacityAnim : true,
			outAnimation: {
				scale: 0,
				opacity: [0, 0],
				duration: 350,
				easing: 'easeInOutQuad'
			},
			inAnimation: {
				delay: 10,
				properties: {
					scale: {
						value: function() {
							return [0, 1];
						},
						duration: 900,
						elasticity: 600,
						easing: 'easeOutElastic'
					},
					opacity: {
						value: [0, 1],
						duration: 50,
						easing: 'linear'
					},
				}
			},
			pathAnimation: {
				duration: 700,
				easing: 'easeOutSine',
				delay: 200
			}
		})
				
		// anime({
		//   	targets: 'path + path + path',
		// //  translateX: '13rem',
		//   	strokeDashoffset: function(el) {
		// 	    var pathLength = el.getTotalLength();
		// 	    el.setAttribute('stroke-dasharray', pathLength);
		// 	    return [pathLength, 0];
		//   	},
		//   	delay:50,
		// 	duration: 3200,
		// 	elasticity: 100,
		// 	easing: 'easeOutElastic'
		// });
		return phrase1.animate()
	}
	render(){
		const Path = ({className,...props}) => <path 
			className={`letter__layer ${className}`} 
			{...props}
		/>
		// 1=gold, 2=red, 3=lila, 4=darklila, 5=cyan
		return(
			<svg viewBox="0 0 1336 200" className="letters letters--effect-1">
				{
					[
						{	// B
							c:[5,1,2],
							className:"bold",
							d:"M76 93c7.5 15.5-32.5 32.5-32.5 32.5s42-11.08 44 21-54 28-54 28l-4-89S65.51 71.32 76 93z"
						},{	// R
							c:[1,4,3],
							className:"bold",
							d:"M96 105s9 10 12 23 7 50 7 50-9-49 5-63a71.82 71.82 0 0 1 30-18"
						},{	// E
							c:[2,3,1],
							className:"bold",
							d:"M184 85s-29.86 12-23 44c6 28 48 36 48 36M161.5 129.5L203 120",
						},{ // I
							c:[3,2,4],
							className:"bold",
							d:"M228.5 104.5l-11 55M218.5 81.5l17-14"
						},
						{	// N
							c:[1,2,5],
							className:"bold",
							d:"M298.5 150.5l11-66 61 52-6-76"
						},{	// H
							c:[2,4,1],
							className:"bold",
							d:"M516.5 10.5l-7 111M550.5 37.5l-7 82M494.5 58.5l77 17"
						},{	// A
							c:[2,3,2],
							className:"bold",
							d:"M380.5 53.5s21-3 30 9 23.79 28.4 12 51c-12 23-32.66 31-34 18-3-29 14-57 26-55s36 45 36 45"
						},{	// C
							c:[2,3,4],
							className:"bold",
							d:"M493.5 50.5s-31 7-31 27c0 43 34 55 34 55M632.5 140.5s49-46 41-81c-7.78-34.05-28.68-26.77-36-17-27 36 18 71 18 71",
						},{
							c:[4,3,5],
							className:"medium",
							d:"M803 90l5-5M739 64s-10.47 7-10 15c1 17 21 19 21 19M746 79l-16.16 4.67M755 94l4-4M760 55l17 39 16-41",
						},{
							c:[1,2,4],
							className:"smaller",
							d:"M24.5 19.5l1 21-.2-10 13.2-11-12 10 13 11M44.5 38.5l2-10M46.5 23.5l3-3M53.5 39.5l4-13 10 12 2-18M82.5 25.5s-5-2-7 1c-1.24 1.86-.5 6.88 2 10 4 5 7-1 5.3-10.14-.12-.65-.19-1.29-.3-1.86-1-5-7-9-7-9M95.5 22.5s-7 3-7 8 9 11 9 11M96.5 30.5l-7.5 1M101.5 24.5l3 15s-1-6-1-7c0-3.16 6-8 9-8M117.5 17.5s-4 20-1 22M147.5 25.5s-5-2-7 1c-1.24 1.86-.5 6.88 2 10 4 5 7-1 5.3-10.14-.12-.65-.19-1.29-.3-1.86-1-5-7-9-7-9M160.5 22.5s-7 3-7 8 9 11 9 11M161.5 30.5l-7.5 1M168.5 39.5l3-12 11 11V23M123 22.06s3.9-.57 5.57 1.7a10.27 10.27 0 0 1 .93 10.73c-2.23 4.35-6.75 5.45-7 3-.56-5.49 4.59-11.46 6.81-11.08s5.19 11.09 5.19 11.09"
						}
					].map( (item,i) => {
						return (
							<g key={i} className={`letter letter--${i+1}${item.className?' '+item.className:''}`}>
								<g className="letter__part">)
									{ item['c'].map(
										( color, i ) => <Path
											transform={typeof item.t != "undefined"?item.t:''}
											key={i}
											className={`color-${color}`}
											d={item.d}
											/>
									)}
								</g>
							</g>
						)
					})
				}
			</svg>
		)
	}
}

export default AnimatedTitle;