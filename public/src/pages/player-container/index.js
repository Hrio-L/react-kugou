import React,{Component} from 'react'
import classNames from 'classnames'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import BaseHandler from '../../common/basehandler'
import Header from '../../components/header'
import Silder from '../../components/silder'
import Icon from '../../components/icon'
import Player from '../../components/player'
import {MaskComponent} from '../../components/mask'
import MySongs from '../../components/my-songs'
import './index.less'

const mapStateToProps = ({rootState:{playing}}) => ({playing})
const mapDispatchToProps = dispatch => ({
	removeItem:id => {
		dispatch({
			type:'REMOVE_PLAYING_ITEM',
			id
		})
	}

})

@immutableRenderDecorator
@connect(mapStateToProps,mapDispatchToProps)
@BaseHandler
class PlayerContainer extends Component{
	state = {
		audio:null,
		audioUsed:0,
		loading:false,
		audioState:'pause',
		silderActive:false,
		myListVisible:false
	}
	componentWillReceiveProps = nextProps => {
		const {playing:{music}} = nextProps
		const {audio} = this.state
		if(music !== this.props.playing.music){
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
	getRef = ref => {
		this.setState({
			audio:ref
		})
	}
	onAudioToggle = ev => {
		const {audioState} = this.state
		if(audioState === 'pause'){
			this.onAudioPlay()
		}else{
			this.audioPause()
		}
	}
	audioPause = () => {
		const {audio} = this.state
		if(!audio){
			return
		}
		if(!audio.paused){
			audio.pause()
		}
		this.setState({
			audioState:'pause',
			loading:false
		})
	}
	onAudioPlay = () => {
		const {audio} = this.state
		const {music} = this.props
		if(!audio){
			return
		}
		if(audio.paused){
			audio.play()
		}
		this.setState({
			audioState:'play',
			loading:false
		})
	}
	onAudioEnded = () => {
		this.setState({
			audioState:'pause',
			audioUsed:0,
			loading:false
		})
	}
	onAudioChange = used => {
		const {audio} = this.state
		if(audio){
			const {playing:{timelength}} = this.props
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
		}else{
			this.setState({
				used:0
			})
		}
	}
	onAudioWaiting = () => {
		this.setState({
			loading:true
		})
	}
	onSilderClick = () => {
		this.setState({
			silderActive:true
		})
	}
	onTimeUpdate = target => {
		const {playing:{timelength}} = this.props
		const {loading,audioState,silderActive} = this.state
		if(!target.paused){
			const curTime = parseFloat(target.currentTime.toFixed(2))
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
	onPrevClick = () => {
		console.log('prev')
	}
	onNextClick = () => {
		console.log('next')
	}
	showCover = () => {
		const {history,location:{search}} = this.props
		history.push('?cover')
	}
	hideCover = () => {
		this.setState({
			coverVisible:false
		})
	}
	handleBack = () => {
		const {history} = this.props
		history.go(-1)
	}
	showMyLists = () => {
		this.setState({
			myListVisible:true
		})
	}
	render(){
		const {playing,onSongClick,location:{search},removeItem} = this.props
		const {audioUsed,loading,audioState,myListVisible} = this.state
		const visbileClass = classNames({
			'player-cover-wrap':true,
			'player-cover-wrap-active':search === '?cover'
		})
		const listVisible = classNames({
			'my-songs-mask':true,
			'my-songs-mask-active':myListVisible
		})
		const actions = [{name:'123',key:'124'}]
		return (
			<div className="player-container">
				<Player
					onClick={this.showCover}
					getRef={this.getRef}
					onTimeUpdate={this.onTimeUpdate}
					onNextClick={this.onNextClick}
					audioState={audioState}
					audioUsed={audioUsed}
					loading={loading}
					onAudioToggle={this.onAudioToggle}
					onAudioPlay={this.onAudioPlay}
					onSilderClick={this.onSilderClick}
					onAudioChange={this.onAudioChange}
					onAudioWaiting={this.onAudioWaiting}
					{...playing}
				/>
				<div className={visbileClass}>
					<div style={{backgroundImage:`url(${playing.img})`}} className="player-bg"></div>
					<div className="player-cover">
						<Header
							logo={
								[
									<Icon onClick={this.handleBack} key="icon" style={{fontSize:8}} type="arrow-left" />,
									<div key="info" className="info">
										<h5>
											{playing.name}
										</h5>
										<span>
											{playing.author}
										</span>
									</div>				
								]
							}
						/>
						<div className="singer-cover">
							<img src={playing.img} alt=""/>
						</div>
						<div className="player-actions">
							<div className="player-time">
								<Silder onChange={this.onAudioChange} onClick={this.onSilderClick} used={audioUsed} style={{background:'silver'}} />
							</div>
							<div className="player-icons">
								<Icon onClick={this.onPrevClick} type="prev" />
								<Icon onClick={this.onAudioToggle} type={audioState === 'play' ? 'pause' : 'play'} />
								<Icon onClick={this.onNextClick} type="next" />
								<Icon onClick={this.showMyLists} type="play-menu" />
							</div>
						</div>
						<MaskComponent className={listVisible} onClick={() => {console.log(123)}}>
							<MySongs 
								songs={playing.lists}
								removeItem={removeItem}
								style={{height:'60%'}}
								onClick={onSongClick} 
							/>
						</MaskComponent>
					</div>
				</div>
			</div>
		)
	}
}

export default PlayerContainer