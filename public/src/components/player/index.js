import React,{Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Silder from '../silder'
import Audio from '../audio'
import Icon from '../icon'
import './index.less'

class Player extends Component {
	static defaultProps = {
		classPrefixer:'player'
	}
	componentWillReceiveProps = nextProps => {
		const {music,error} = nextProps
		const {audio} = this.state
		if(music !== this.props){
			if(audio){
				audio.currentTime = 0
			}
			this.setState({
				audioUsed:0,
				audioState:'play',
				loading:true
			})
		}
	}
	state = {
		audio:null,
		audioState:'pause',
		audioUsed:0,
		loading:false,
		silderActive:false
	}
	getAudioRef = ref => {
		this.setState({
			audio:ref
		})
	}
	audioToggle = ev => {
		ev.stopPropagation()
		const {audioState} = this.state
		if(audioState === 'pause'){
			this.audioPlay()
		}else{
			this.audioPause()
		}
	}
	audioPause = () => {
		const {audio} = this.state
		if(!audio.paused){
			audio.pause()
		}
		this.setState({
			loading:false,
			audioState:'pause'
		})
	}
	audioPlay = () => {
		const {audio} = this.state
		const {music} = this.props
		if(audio.paused){
			audio.play()
		}
		this.setState({
			audioState:'play',
			loading:false
		})
	}
	audioEned = () => {
		this.setState({
			audioState:'pause',
			audioUsed:0,
			loading:false
		})
	}
	audioError = (err) => {
		this.setState({
			audioState:'pause',
			loading:false
		})
	}
	onAudioPlay = () => {
		this.audioPlay()
	}

	onTimeUpdate = () => {
		const {timelength} = this.props
		const {audio,loading,audioState,silderActive} = this.state
		if(!audio.paused){
			const curTime = parseFloat(audio.currentTime.toFixed(2))
			const totalTime = parseFloat((timelength/1000).toFixed(2))
			const audioUsed = parseFloat((curTime/totalTime*100).toFixed(2))
			if(!silderActive){
				this.setState({
					audioUsed,
					loading:false
				})
			}
		}
	}
	onAudioWaiting = () => {
		this.setState({
			loading:true
		})
	}
	onAudioChange = used => {
		const {audio} = this.state
		const {timelength} = this.props
		const totalTime = parseFloat((timelength/1000).toFixed(2))
		const time = parseFloat((used / 100 * totalTime).toFixed(2))
		audio.currentTime = time
		if(audio.paused){
			audio.play()
		}
		this.setState({
			audioUsed:used,
			silderActive:false
		})
	}
	onSilderClick = () => {
		this.setState({
			silderActive:true
		})
	}
	render (){
		const {classPrefixer,className,music,name,img,author} = this.props
		const classes = classNames(classPrefixer,className)
		const {audioState,audioUsed,loading} = this.state
		const imgClass = classNames({
			active:audioState === 'play' && !loading
		})

		return music ? (
			<div className={classes}>	
				{loading && (
					<span className={`${classPrefixer}-loading`}>缓冲中...</span>
				)}
				<Audio
					onTimeUpdate={this.onTimeUpdate}
					onWaiting={this.onAudioWaiting}
					onPlay={this.onAudioPlay}
					getAudioRef={this.getAudioRef}
					onPause={this.onPause}
					onEnded={this.audioEned}
					onError={this.audioError}
					src={music}
				 />
				<div className={`${classPrefixer}-avatar`}>
					{img && (
						<img className={imgClass} src={img} alt="image"/>
					)}
				</div>
				<div className={`${classPrefixer}-main`}>
					<Silder onClick={this.onSilderClick} onChange={this.onAudioChange} used={audioUsed} />
					<div className={`${classPrefixer}-info`}>
						<div className={`${classPrefixer}-song`}>
							<h5 className={`${classPrefixer}-song-name`}>{name}</h5>
							<span className={`${classPrefixer}-song-desc`}>{author}</span>
						</div>
						<div className={`${classPrefixer}-actions`}>
							<Icon onClick={this.audioToggle} type={audioState === 'play' ? 'pause' : 'play'} />
							<Icon type="next" />
						</div>
					</div>
				</div>
			</div>
		):null
	}
}

Player.propTypes = {
	className:PropTypes.string,
	music:PropTypes.string,
	name:PropTypes.string,
	author:PropTypes.string,
	img:PropTypes.string,
	timelength:PropTypes.number
}

export default Player