import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import SongsView from '../../../components/songs-view'
import Scroll from '../../../components/scroll'
import BaseHandler from '../../../common/basehandler'

const mapStateToProps = ({toplist:{rank:{loading,page,list,banner,rankname,time,total}}}) => ({loading,page,list,banner,rankname,time,total})
const mapDispatchToProps = dispatch => ({
	getList:payload => {
		dispatch({
			type:'GET_RANK_LIST_REQUEST',
			payload
		})
	},
	loadRank:payload => {
		dispatch({
			type:'LOAD_RANK_LIST_REQUEST',
			payload
		})
	},
	initRank:() => {
		dispatch({
			type:'INIT_RANK_LIST'
		})
	},
	showLoading: payload => {
		dispatch({
			type:'CHANGE_RANK_LOADING_STATE',
			payload
		})
	}
})

@immutableRenderDecorator
@connect(mapStateToProps,mapDispatchToProps)
@BaseHandler
class Rank extends Component{
	componentDidMount = () => {
		const {page,list,getList,match:{params:{id}}} = this.props
		if(id && !list.length){
			getList({
				rankid:id,
				page
			})
		}
	}
	componentWillUnmount = () => {
		const {initRank} = this.props
		initRank()
	}
	loadList = () => {
		const {page,total,list,loadRank,showLoading,match:{params:{id}}} = this.props
		if(total > list.length){
			showLoading(true)
			loadRank({
				rankid:id,
				page:page + 1
			})
		}
	}
	render(){
		const {list,rankname,time,banner,loading,onSongClick} = this.props
		return(
			<div className="rank">
				<Scroll style={{paddingBottom:70}} loading={loading} onBottom={this.loadList}>
					<SongsView
						onSongClick={onSongClick}
						banner={banner}
						list={list}
						title={rankname}
						footText={time}
					/>
				</Scroll>
			</div>
		)
	}
}

export default Rank