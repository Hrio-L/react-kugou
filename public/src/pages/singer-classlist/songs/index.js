import React,{Component} from 'react'
import {connect} from 'react-redux'
import Icon from '../../../components/icon'
import SongsView from '../../../components/songs-view'
import Scroll from '../../../components/scroll'
import BaseHandler from '../../../common/basehandler'

const mapStateToProps = ({singerClasslist:{singer:{songs,singerName,banner,intro,page,loading,total}}}) => ({songs,singerName,banner,intro,page,loading,total})
const mapDispatchToProps = dispatch => ({
	getSongsRequest:(id,page) => {
		dispatch({
			type:'GET_SINGER_SONGS_LIST_REQUEST',
			id,
			page
		})
	},
	initSinger:() => {
		dispatch({
			type:'INIT_SINGER'
		})
	},
	showLoading:() => {
		dispatch({
			type:'CHANGE_SINGER_LOADING',
			loading:true
		})
	}
})

@connect(mapStateToProps,mapDispatchToProps)
@BaseHandler
class Songs extends Component{
	componentDidMount = () => {
		const {match:{params:{id}},getSongsRequest,page} = this.props
		if(id){
			getSongsRequest(id,page)
		}
	}
	componentWillUnmount = () => {
		const {initSinger} = this.props
		initSinger()
	}
	loadList = () => {
		const {match:{params:{id}},getSongsRequest,page,total,songs,showLoading} = this.props
		if(total > songs.length){
			showLoading()
			getSongsRequest(id,page)
		}
	}
	render(){
		const {songs,singerName,banner,intro,loading,onSongClick} = this.props
		return (
			<div className="songs">
				<Scroll style={{paddingBottom:70}} loading={loading} onBottom={this.loadList}>
					<SongsView
						onSongClick={onSongClick}
						lists={songs}
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