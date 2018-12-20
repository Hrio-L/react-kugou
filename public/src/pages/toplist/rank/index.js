import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import SongsView from '../../../components/songs-view'
import Scroll from '../../../components/scroll'
import BaseHandler from '../../../common/basehandler'

const mapStateToProps = ({toplist:{rank:{loading,page,lists,banner,rankname,time,total}}}) => ({loading,page,lists,banner,rankname,time,total})
const mapDispatchToProps = dispatch => ({
	getListRequest:(id,page) => {
		dispatch({
			type:'GET_RANK_LIST_REQUEST',
			id,
			page
		})
	},
	initRank:() => {
		dispatch({
			type:'INIT_RANK_LIST'
		})
	},
	showLoading: () => {
		dispatch({
			type:'CHANGE_RANK_LOADING_STATE',
			loading:true
		})
	}
})

@connect(mapStateToProps,mapDispatchToProps)
@BaseHandler
class Rank extends Component{
	componentDidMount = () => {
		const {page,lists,getListRequest,match:{params:{id}}} = this.props
		if(id){
			getListRequest(id,page)
		}
	}
	componentWillUnmount = () => {
		const {initRank} = this.props
		initRank()
	}
	loadList = () => {
		const {page,total,lists,getListRequest,showLoading,match:{params:{id}}} = this.props
		if(total > lists.length){
			showLoading()
			getListRequest(id,page)
		}
	}
	render(){
		const {lists,rankname,time,banner,loading,onSongClick} = this.props
		return(
			<div className="rank">
				<Scroll loading={loading} onBottom={this.loadList}>
					<SongsView
						onSongClick={onSongClick}
						banner={banner}
						lists={lists}
						title={rankname}
						footText={time}
					/>
				</Scroll>
			</div>
		)
	}
}

export default Rank