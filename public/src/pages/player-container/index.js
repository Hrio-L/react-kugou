import React,{Component} from 'react'
import classNames from 'classnames'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import BaseHandler,{toast} from '../../common/basehandler'
import Header from '../../components/header'
import Slider from '../../components/slider'
import Icon from '../../components/icon'
import Player from '../../components/player'
import {MaskComponent} from '../../components/mask'
import MySongs from '../../components/my-songs'
import Lyrics from '../../components/lyrics'
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
		curTime:0,
		silderActive:false,
		myListVisible:false,
		methods:['loop-one','loop','random']
	}
	componentWillReceiveProps = nextProps => {
		const {replayMusic,playing:{replay,list,music}} = nextProps
		const {audio} = this.state
		if(music !== this.props.playing.music){
			this.setState({
				audioUsed:0
			})
		}
		if(replay){
			this.setState({
				audioUsed:0,
				myListVisible:false
			})
			audio.currentTime = 0
			replayMusic(false)
		}
		if(this.props.playing.list.length === list.length){
			this.setState({
				myListVisible:false,
				loading:false
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
	getCurrentMusicIndex = () => {
		const {playing:{list,id}} = this.props
		let currentIndex = 0
		list.forEach((d,i) => {
			if(d.id === id){
				currentIndex = i
			}
		})
		return currentIndex
	} 
	onAudioPause = () => {
		this.setState({
			audioState:'pause'
		})
	}
	onAudioEnded = () => {
		const {playing:{list,playMethod,id},onSongClick} = this.props
		const {audio} = this.state
		this.setState({
			audioUsed:0,
			loading:false
		})
		const currentIndex = this.getCurrentMusicIndex()
		if(!list.length){
			if(audio.paused){
				audio.play()
			}
			return onSongClick({id},true)
		}
		if(currentIndex === 0 && list.length === 1){
			if(audio.paused){
				audio.play()
			}
			return onSongClick(list[0],true)
		}
		switch(playMethod){
			case 'loop':
				if(currentIndex === list.length - 1){
					if(audio.paused){
						audio.play()
					}
					return onSongClick(list[0],true)
				}else{
					return onSongClick(list[currentIndex + 1])
				}
			case 'loop-one':
				if(audio.paused){
					audio.play()
				}
				return onSongClick({
					id
				},true)
			case 'random':
				const randomIndex = Math.floor(Math.random() * list.length)
				return onSongClick(list[randomIndex],true)
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
	onSliderClick = () => {
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
					curTime,
					loading:false
				})
			}
		}
	}
	onPrevClick = () => {
		const {playing:{list,playMethod},onSongClick} = this.props
		const currentIndex = this.getCurrentMusicIndex()
		if(list.length <= 1){
			return toast.show('快去首页添加歌曲吧')
		}
		switch(playMethod){
			case 'loop-one':
			case 'loop':
			case 'random':
				if(currentIndex === 0){
					return onSongClick(list[list.length-1],true)
				}else{
					return onSongClick(list[currentIndex - 1])
				}
		}
	}
	onNextClick = () => {
		const {playing:{list,playMethod},onSongClick} = this.props
		const currentIndex = this.getCurrentMusicIndex()
		if(list.length <= 1){
			return toast.show('快去首页添加歌曲吧')
		}
		switch(playMethod){
			case 'loop-one':
			case 'loop':
				if(currentIndex === list.length - 1){
					return onSongClick(list[0],true)
				}else{
					return onSongClick(list[currentIndex + 1])
				}
			case 'random':
				const randomIndex = Math.floor(Math.random() * list.length)
				return onSongClick(list[randomIndex],true)
		}
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
	timeFomat = second => {
		const minute = Math.floor(second / 60)
		const remain = second % 60
		const finalyMinute =  minute < 10 ? `0${minute}` : minute
		const finalySecond = remain.toString().length === 1 ? `0${remain}` : remain
		return [finalyMinute,finalySecond].join(':')
	}
	render(){
		const {playing,onSongClick,location:{search},removeItem} = this.props
		const {audioUsed,loading,audioState,myListVisible,curTime} = this.state
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
					onAudioPause={this.onAudioPause}
					onSliderClick={this.onSliderClick}
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
						<Lyrics lyrics={playing.lyrics} currentTime={Math.ceil(curTime)} />
						<div className="player-actions">
							<div className="player-time">
								<span className="time-use">{this.timeFomat(Math.floor(curTime))}</span>
								<Slider onChange={this.onAudioChange} onClick={this.onSliderClick} used={audioUsed} style={{background:'silver'}} />
								<span className="time-length">{this.timeFomat(Math.floor(playing.timelength / 1000))}</span>
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