import React,{PureComponent} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import SongsView from '../../../components/songs-view'
import Scroll from '../../../components/scroll'
import BaseHander,{toast} from '../../../common/basehandler'

const mapStateToProps = ({plist:{detail:{list,banner,specialname,intro,loading,total,page}}}) => ({list,banner,specialname,intro,loading,total,page})
const mapDispatchToProps = dispatch => ({
	getDetail:payload => {
		dispatch({
			type:'GET_PLIST_DETAIL_REQUEST',
			payload
		})
	},
	loadDetail:payload => {
		dispatch({
			type:'LOAD_PLIST_DETAIL_REQUEST',
			payload
		})
	},
	initDetail:() => {
		dispatch({
			type:'INIT_PLIST_DETAIL'
		})
	},
	showLoading:payload => {
		dispatch({
			type:'CHANGE_PLIST_DETAIL_LOADING_STATE',
			payload
		})
	}
})

@immutableRenderDecorator
@connect(mapStateToProps,mapDispatchToProps)
@BaseHander
class PlistDetail extends PureComponent{
	componentDidMount = () => {
		const {page,getDetail,list,match:{params:{id}}} = this.props
		if(id){
			getDetail({
				plistid:id,
				page
			})
		}
	}
	componentWillUnmount = () => {
		const {initDetail,list} = this.props
		if(list.length){
			this.props.initDetail()
		}
	}
	loadList = () => {
		const {page,total,list,showLoading,loadDetail,match:{params:{id}}} = this.props
		if(total > list.length){
			showLoading(true)
			loadDetail({
				plistid:id,
				page:page+1
			})
		}
	}
	render(){
		const {list,specialname,banner,intro,loading,onSongClick,addPlayingList,onDownload} = this.props
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
		return(
			<div className="plist-detail">
				<Scroll style={{paddingBottom:70}} loading={loading} onBottom={this.loadList}>
					<SongsView
						actions={actions}
						onSongClick={onSongClick}
						banner={banner}
						list={list}
						title={specialname}
						collapse={{
							header:specialname,
							content:intro
						}}
					/>
				</Scroll>
			</div>
		)
	}
}

export default PlistDetail