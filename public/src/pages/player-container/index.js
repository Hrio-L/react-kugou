import React,{Component} from 'react'
import classNames from 'classnames'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import BaseHandler,{toast} from '../../common/basehandler'
import Header from '../../components/header'
import Silder from '../../components/silder'
import Icon from '../../components/icon'
import Player from '../../components/player'
import {MaskComponent} from '../../components/mask'
import MySongs from '../../components/my-songs'
import './index.less'

const mapStateToProps = ({rootState:{playing}}) => ({playing})
const mapDispatchToProps = dispatch => ({
	removeItem:payload => {
		dispatch({
			type:'REMOVE_PLAYING_ITEM',
			payload
		})
	},
	updateMethod :payload => {
		dispatch({
			type:'UPDATE_PLAYING_METHOD',
			payload
		})
	},
	initList:() => {
		dispatch({
			type:'INIG_PLAYING_LIST'
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
		myListVisible:false,
		methods:['loop-one','loop','random']
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
		const {playing:{lastMusic,list},onSongClick,playMethod} = this.props
		if(!audio){
			if(lastMusic){
				return onSongClick({
					id:lastMusic
				})
			}else{
				if(list.length){
					switch(playMethod){
						case 'loop':
						case 'loop-one':
							return onSongClick(list[0].id)
						case 'random':
							return onSongClick(list[Math.floor(Math.random() * list.length - 1)])
					}
				}else{
					return toast.show('你怕是第一次来哦,去首页看看把')
				}
			}
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
		const {playing:{list,playMethod,id},onSongClick} = this.props
		const {audio} = this.state
		let currentIndex = 0
		this.setState({
			audioUsed:0,
			loading:false
		})

		list.forEach((d,i) => {
			if(d.id === id){
				currentIndex = i
			}
		})
		if(!list.length){
			if(audio.paused){
				audio.play()
			}
			return onSongClick({id},true)
		}
		if(currentIndex === 0 && list.length === 1){
			return onSongClick(list[0],true)
		}
		switch(playMethod){
			case 'loop':
				if(currentIndex === list.length - 1){
					return onSongClick(list[0],true)
				}else{
					return onSongClick(list[currentIndex + 1])
				}
			case 'loop-one':
				return onSongClick({
					id
				},true)
			case 'random':
				return onSongClick(list[Math.floor(Math.random() * list.length - 1)],true)
		}
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
	hideMyLists = () => {
		this.setState({
			myListVisible:false
		})
	}
	getPlayIconType = () => {
		const {playing:{playMethod}} = this.props
		switch(playMethod){
			case 'loop-one':
				return 'loop-one'
			break
			case 'random':
				return 'random'
			break
			case 'loop':
				return 'retweet'
			break
		}
	}
	changeMothod = (ev) => {
		ev.stopPropagation()
		const {updateMethod,playing:{playMethod}} = this.props
		const {methods} = this.state
		methods.forEach((d,i) => {
			if(d === playMethod){
				if(i < methods.length-1){
					updateMethod(methods[i+1])
				}else{
					updateMethod(methods[0])
				}
			}
		})
	}
	removeList = ev => {
		ev.stopPropagation()
		const {initList,playing:{list}} = this.props
		if(list.length){
			initList()
		}
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
		const singerCoverVisible = classNames({
			'singer-cover':true,
			'singer-cover-active':audioState === 'play' && !loading
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
					onAudioEnded={this.onAudioEnded}
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
						<div className={singerCoverVisible}>
							<img src={playing.img} alt=""/>
						</div>
						<div className="player-actions">
							<div className="player-time">
								<Silder onChange={this.onAudioChange} onClick={this.onSilderClick} used={audioUsed} style={{background:'silver'}} />
							</div>
							<div className="player-icons">
								<Icon style={{fontSize:10}} onClick={this.changeMothod} type={`${this.getPlayIconType()}`} />
								<Icon onClick={this.onPrevClick} type="prev" />
								<Icon onClick={this.onAudioToggle} type={audioState === 'play' ? 'pause' : 'play'} />
								<Icon onClick={this.onNextClick} type="next" />
								<Icon onClick={this.showMyLists} type="play-menu" />
							</div>
						</div>
						<MaskComponent className={listVisible} onClick={this.hideMyLists}>
							<MySongs 
								songs={playing.list}
								removeItem={removeItem}
								style={{height:'60%'}}
								onClick={onSongClick} 
								logo={<Icon onClick={this.changeMothod} type={`${this.getPlayIconType()}-black`} />}
								extra={<Icon onClick={this.removeList} style={{fontSize:8,color:'silver'}} type="trash" />}
							/>
						</MaskComponent>
					</div>
				</div>
			</div>
		)
	}
}

export default PlayerContainer