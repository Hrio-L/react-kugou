import React,{Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Audio extends Component{
	static defaultProps = {
		classPrefixer:'audio'
	}
	componentDidMount = () => {
		const {audio} = this.refs
		const {getAudioRef} = this.props
		audio.play()
		getAudioRef(audio)
	}
	onPlay = ev => {
		const {onPlay} = this.props
		const {audio} = this.props
		onPlay && onPlay()
	}
	onTimeUpdate = ev => {
		const {onTimeUpdate} = this.props
		onTimeUpdate && onTimeUpdate()
	}
	onProgress = () => {
		const {onProgress} = this.props
		onProgress && onProgress()
	}
	onWaiting = () => {
		const {onWaiting} = this.props
		onWaiting && onWaiting()
	}
	onPause = ev => {
		const {onPause} = this.props
		onPause && onPause()
	}
	onError = ev => {
		const {onError} = this.props
		onError && onError(ev)
	}
	onEnded = ev => {
		const {onEnded} = this.props
		onEnded && onEnded()
	}
	render(){
		const {classPrefixer,className,src} = this.props
		const classes = classNames(classPrefixer,className)
		const {onPlay,onTimeUpdate,onPause,onError,onProgress,onEnded,onWaiting} = this
		const events = {
			onPlay,
			onTimeUpdate,
			onPause,
			onError,
			onProgress,
			onEnded,
			onWaiting
		}
		return(
			<audio {...events} autoPlay ref="audio" src={src} className={classes}></audio>
		)
	}
}

Audio.propTyeps = {
	src:PropTypes.string.isRequired,
	onPause:PropTypes.func,
	onPlay:PropTypes.func,
	onTimeUpdate:PropTypes.func,
	onError:PropTypes.func,
	onEnded:PropTypes.func,
	onProgress:PropTypes.func,
	getAudioRef:PropTypes.func
}

export default Audio