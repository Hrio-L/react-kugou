import React,{Component} from 'react'
import {connect} from 'react-redux'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import Songslist from '../../components/songslist'
import ActionSheet from '../../components/action-sheet'
import Swiper from '../../components/swiper'
import Icon from '../../components/icon'
import Scroll from '../../components/scroll'
import BaseHandler,{toast} from '../../common/basehandler'
import './index.less'

const mapStateToProps = ({newlist:{songs,banners}}) => ({songs,banners})
const mapDispatchToProps = dispatch => ({
	getListRequest:() => {
		dispatch({
			type:'GET_NEWLIST_REQUEST'
		})
	}
})

@immutableRenderDecorator
@connect(mapStateToProps,mapDispatchToProps)
@BaseHandler
class Newlist extends Component{
	constructor(props){
		super(props)
	}
	componentDidMount = () => {
		const {getListRequest,songs} = this.props

		if(!songs.length){
			getListRequest()
		}
	}
	getSongs = () => {
		const {songs} = this.props
		return songs.map((d,i) => {
			const info = d.filename.trim().split(' - ')
			const author =info[0]
			const name = info[1]
			const id = d.hash
			return {
				name,
				author,
				id
			}
		})
	}
	renderBanner = () => {
		const {banners} = this.props
		if(banners.length){
			return (
				<Swiper defaultSelected={`${banners[0].id}`} dot={true} autoplay={true}>
					{banners.map((d,i) => (
						<img onClick={() => {window.open(d.extra.tourl)}} key={d.id} src={d.imgurl} alt={d.title}/>
					))}
				</Swiper>
			)
		}
	}
	render(){
		const {songs,isTop,onSongClick,addPlayingList,onDownload} = this.props
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
			<div className="newlist">
				<Scroll isTop={isTop} timeout={300} overflowScale={.25} style={{paddingTop:91,paddingBottom:70}}>
					{!songs.length && (
						<Icon style={{display:'block',margin:'10px auto',fontSize:22,color:'silver'}} type="loading" />
					)}
					{this.renderBanner()}
					<Songslist 
						onClick={onSongClick} 
						songs={this.getSongs()} 
						actions={actions}
						actionClick={row => console.log(row)}
						actionComponent={ActionSheet} 
					/>
				</Scroll>
			</div>
		)
	}
}

export default Newlist