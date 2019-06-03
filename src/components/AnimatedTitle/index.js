import * as React from 'react'
import styles from './styles.css'
import anime from 'animejs'
import Phrase from './animate.js'
import letters from './letters'
import Path from './Path'
import Svg from './Svg'

class AnimatedTitle extends React.Component {
	componentDidMount() {
		var svgFx1 = document.querySelector('.letters--effect-1')

		const phrase1 = new Phrase(svgFx1, {
			pathOpacityAnim: true,
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
						value: function () {
							return [0, 1]
						},
						duration: 900,
						elasticity: 600,
						easing: 'easeOutElastic'
					},
					opacity: {
						value: [0, 1],
						duration: 50,
						easing: 'linear'
					}
				}
			},
			pathAnimation: {
				duration: 700,
				easing: 'easeOutSine',
				delay: 200
			}
		})
		return phrase1.animate()
	}
	render() {
		return (
			<svg
				style={{ maxWidth: 'calc(1336px/2.5)', maxHeight: 'calc(200px/2.5)' }}
				{...this.props}
				viewBox="0 0 1336 200"
				className="letters letters--effect-1">
				{letters.map((item, i) => (
					<g
						key={i}
						className={`letter letter--${i + 1}${
							item.className ? ' ' + item.className : ''
							}`}>
						<g className="letter__part">
							{item['c'].map((color, i) => (
								<Path
									fill="none"
									transform={typeof item.t != 'undefined' ? item.t : ''}
									key={i}
									color={color}
									className={`color-${color}`}
									d={item.d}
								/>
							))}
						</g>
					</g>
				))}
			</svg>
		)
	}
}

export default AnimatedTitle
export { letters, Path }
