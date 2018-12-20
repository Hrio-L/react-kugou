import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import SongsView from '../../../components/songs-view'
import Scroll from '../../../components/scroll'
import BaseHander from '../../../common/basehandler'

const mapStateToProps = ({plist:{detail:{lists,banner,specialname,intro,loading,total,page}}}) => ({lists,banner,specialname,intro,loading,total,page})
const mapDispatchToProps = dispatch => ({
	getDetailRequest:(id,page) => {
		dispatch({
			type:'GET_PLIST_DETAIL_REQUEST',
			id,
			page
		})
	},
	initDetail:() => {
		dispatch({
			type:'INIT_PLIST_DETAIL'
		})
	},
	showLoading:() => {
		dispatch({
			type:'CHANGE_PLIST_DETAIL_LOADING_STATE',
			loading:true
		})
	}
})

@connect(mapStateToProps,mapDispatchToProps)
@BaseHander
class PlistDetail extends Component{
	componentDidMount = () => {
		const {getDetailRequest,page,match:{params:{id}}} = this.props
		if(id){
			getDetailRequest(id,page)
		}
	}
	componentWillUnmount = () => {
		const {initDetail} = this.props
		initDetail()
	}
	loadList = () => {
		const {page,total,lists,showLoading,getDetailRequest,match:{params:{id}}} = this.props
		if(total > lists.length){
			showLoading()
			getDetailRequest(id,page)
		}
	}
	render(){
		const {lists,specialname,banner,intro,loading,onSongClick} = this.props
		return(
			<div className="plist-detail">
				<Scroll loading={loading} onBottom={this.loadList}>
					<SongsView
						onSongClick={onSongClick}
						banner={banner}
						lists={lists}
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