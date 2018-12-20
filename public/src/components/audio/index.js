import React,{Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Audio extends Component{
	static defaultProps = {
		classPrefixer:'audio'
	}
	componentDidMount = () => {
		this.refs.audio.play()
	}
	onPlay(ev){
		console.log('play')
	}
	onTimeUpdate(ev){
		console.log('playing')
	}
	onPause(ev){
		console.log('stop')
	}
	onError(ev){
		console.log('error')
	}

	render(){
		const {classPrefixer,className,src} = this.props
		const classes = classNames(classPrefixer,className)
		const {onPlay,onTimeUpdate,onPause,onError} = this
		const events = {
			onPlay,
			onTimeUpdate,
			onPause,
			onError
		}
		return(
			<audio {...events} autoPlay ref="audio" src={src} className={classes}></audio>
		)
	}
}

Audio.propTyeps = {
	src:PropTypes.string.isRequired
}

export default Audio