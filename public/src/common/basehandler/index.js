import React,{Component} from 'react'
import {connect} from 'react-redux'
import Toast from '../../components/toast'
export const toast = {
	show:text => {
		Toast.show({
			message:text,
			duration:1,
			style:{
				color:'white'
			}
		})
	}
}
export const handleError = err => {
	console.error(err)
	Toast.show({
		message:'网络异常',
		style:{color:'white'},
		duration:1.5
	})
}

const BaseHandler = Comp => {
	const mapDispatchToProps = dispatch => ({
		getSongDetail:(payload,callback) => {
			dispatch({
				type:'GET_SONG_DETAIL_REQUEST',
				payload,
				callback
			})
		},
		download:payload => {
			dispatch({
				type:'DOWNLOAD_REQUEST',
				payload
			})
		},
		addPlayingList:payload => {
			dispatch({
				type:'UPDATE_PLAYING_LIST',
				payload
			})
		},
		replayMusic:payload => {
			dispatch({
				type:'REPLAY_MUSIC',
				payload
			})
		}
	})

	@connect(({rootState:{playing}})=>({playing}),mapDispatchToProps)
	class NewComponent extends Component{
		onSongClick = (info,pass) => {
			const {getSongDetail,replayMusic,playing:{id}} = this.props
			if(id !== info.id || pass){
				Toast.show({
					message:'加载中...',
					style:{color:'white'}
				})
				getSongDetail({
					hash:info.id
				},() => {
					Toast.close()
				})
			}else{
				replayMusic(true)
			}
		}
		onDownload = hash => {
			const {download} = this.props
			if(hash){
				download({
					hash
				})
			}
		}
		render(){
			const {getSongDetail,addPlayingList,...rest} = this.props
			return (
				<Comp onSongClick={this.onSongClick}  addPlayingList={addPlayingList} onDownload={this.onDownload} {...rest} />
			)
		}
	}

	return NewComponent
}

export default BaseHandler