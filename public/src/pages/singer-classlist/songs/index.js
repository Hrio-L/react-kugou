import React,{Component} from 'react'
import {connect} from 'react-redux'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import Icon from '../../../components/icon'
import SongsView from '../../../components/songs-view'
import Scroll from '../../../components/scroll'
import BaseHandler,{toast} from '../../../common/basehandler'

const mapStateToProps = ({singerClasslist:{singer:{list,singerName,banner,intro,page,loading,total}}}) => ({list,singerName,banner,intro,page,loading,total})
const mapDispatchToProps = dispatch => ({
	getSongsList:payload => {
		dispatch({
			type:'GET_SINGER_SONGS_LIST_REQUEST',
			payload
		})
	},
	loadSongsList:payload => {
		dispatch({
			type:'LOAD_SONGS_LIST_REQUEST',
			payload
		})
	},
	initSinger:() => {
		dispatch({
			type:'INIT_SONGS_LIST'
		})
	},
	showLoading:payload => {
		dispatch({
			type:'CHANGE_SINGER_LOADING',
			payload
		})
	}
})

@immutableRenderDecorator
@connect(mapStateToProps,mapDispatchToProps)
@BaseHandler
class Songs extends Component{
	componentDidMount = () => {
		const {match:{params:{id}},getSongsList,page,list} = this.props
		if(id && !list.length){
			getSongsList({
				singerid:id,
				page
			})
		}
	}
	componentWillUnmount = () => {
		const {initSinger,list} = this.props
		if(list.length){
			initSinger()
		}
	}
	loadList = () => {
		const {match:{params:{id}},loadSongsList,page,total,list,showLoading} = this.props
		if(total > list.length){
			showLoading(true)
			loadSongsList({
				singerid:id,
				page:page + 1
			})
		}
	}
	render(){
		const {list,singerName,banner,intro,loading,onSongClick,addPlayingList,onDownload} = this.props
		const actions = [{
			name:'播放',
			key:'play',
			onClick:(row,close) => {
				onSongClick(row)
				close()
			}
		},{
			name:'添加到歌单',
			key:'add',
			onClick:(row,close) => {
				addPlayingList({
					id:row.id,
					author:row.desc,
					name:row.name
				})
				toast.show('添加成功')
				close()
			}
		},{
			name:'分享',
			key:'share',
			onClick:(row,close) => {
				toast.show('该功能暂时没开通')
			}
		},{
			name:'下载',
			key:'download',
			onClick:(row,close) => {
				onDownload(row.id)
				close()
			}
		}]
		return (
			<div className="songs">
				<Scroll style={{paddingBottom:70}} loading={loading} onBottom={this.loadList}>
					<SongsView
						actions={actions}
						onSongClick={onSongClick}
						list={list}
						title={singerName}
						banner={banner}
						collapse={{
							header:singerName,
							content:intro
						}}
					/>
				</Scroll>
			</div>
		)
	}
}

export default Songs