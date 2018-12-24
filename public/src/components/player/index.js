import React,{PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Silder from '../silder'
import Audio from '../audio'
import Icon from '../icon'
import './index.less'

class Player extends PureComponent {
	static defaultProps = {
		classPrefixer:'player'
	}
	audioToggle = ev => {
		ev.stopPropagation()
		this.props.onAudioToggle && this.props.onAudioToggle()
	}

	onAudioEned = () => {
		this.props.onAudioEnded && this.props.onAudioEnded()
	}
	audioError = (err) => {
		this.props.onAudioError && this.props.onAudioError()
	}
	onAudioPlay = () => {
		this.props.onAudioPlay && this.props.onAudioPlay()
	}
	onTimeUpdate = target => {
		this.props.onTimeUpdate && this.props.onTimeUpdate(target)
	}
	onAudioWaiting = () => {
		this.props.onAudioWaiting && this.props.onAudioWaiting()
	}
	onAudioChange = used => {
		this.props.onAudioChange && this.props.onAudioChange(used)
	}
	onSilderClick = () => {
		this.props.onSilderClick && this.props.onSilderClick()
	}
	
	onPlayerClick = (ev) => {
		ev.stopPropagation()
		const {onClick} = this.props
		onClick && onClick()
	}
	onNextClick = ev => {
		ev.stopPropagation()
		const {onNextClick} = this.props
		onNextClick && onNextClick()

	}
	render (){
		const {classPrefixer,className,music,name,img,author,getRef,audioState,audioUsed,loading} = this.props
		const classes = classNames(classPrefixer,className)
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
					getAudioRef={getRef}
					onPause={this.onPause}
					onEnded={this.onAudioEned}
					onError={this.audioError}
					src={music}
				 />
				<div onClick={this.onPlayerClick} className={`${classPrefixer}-avatar`}>
					{img && (
						<img className={imgClass} src={img} alt="image"/>
					)}
				</div>
				<div className={`${classPrefixer}-main`}>
					<Silder onClick={this.onSilderClick} onChange={this.onAudioChange} used={audioUsed} />
					<div className={`${classPrefixer}-info`}>
						<div onClick={this.onPlayerClick} className={`${classPrefixer}-song`}>
							<h5 className={`${classPrefixer}-song-name`}>{name}</h5>
							<span className={`${classPrefixer}-song-desc`}>{author}</span>
						</div>
						<div className={`${classPrefixer}-actions`}>
							<Icon onClick={this.audioToggle} type={audioState === 'play' ? 'pause' : 'play'} />
							<Icon onClick={this.onNextClick} type="next" />
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
	timelength:PropTypes.number,
	loading:PropTypes.bool,
	onClick:PropTypes.func,
	onTimeUpdate:PropTypes.func,
	getRef:PropTypes.func,
	onNextClick:PropTypes.func,
	onSilderClick:PropTypes.func,
	onAudioToggle:PropTypes.func,
	onAudioWaiting:PropTypes.func,
	onAudioChange:PropTypes.func,
	onAudioEnded:PropTypes.func
}

export default Player