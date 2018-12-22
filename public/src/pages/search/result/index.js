import React,{Component} from 'react'
import {connect} from 'react-redux'
import Scroll from '../../../components/scroll'
import Songlist from '../../../components/songslist'
import Icon from '../../../components/icon'
import ActionSheet from '../../../components/action-sheet'
import BaseHanlder from '../../../common/basehandler'

const mapStateToProps = ({search:{result}}) => ({result})
const mapDispatchToProps = dispatch => ({
	searchRequest:(keyword,page) => {
		dispatch({
			type:'SEARCH_REQUEST',
			keyword,
			page
		})
	},
	showLoading:() => {
		dispatch({
			type:'CHANGE_RESULT_LOADING',
			loading:true
		})
	},
	initResult :() => {
		dispatch({
			type:'INIT_RESULT'
		})
	}
})

@connect(mapStateToProps,mapDispatchToProps)
@BaseHanlder
class Result extends Component{
	componentDidMount = () => {
		const {match:{params:{keyword}},placeholderChange,searchRequest,placeholder} = this.props
		if(keyword){
			if(placeholder !== keyword){
				placeholderChange(keyword)
				searchRequest(keyword,1)
			}
		}
	}

	componentWillUnmount = () => {
		const {initResult,placeholderChange} = this.props
		initResult()
	}
	loadList = () => {
		const {result:{page,total,lists},match:{params:{keyword}},searchRequest,showLoading} = this.props
		if(total > lists.length){
			showLoading()
			searchRequest(keyword,page + 1)
		}
	}
	getLists = () => {
		const {result:{lists}} = this.props
		return lists.map((d,i) => ({
			name:d.songname,
			id:d.hash,
			author:d.singername
		}))
	}
	renderLoading = () => {
		const {result:{complate,lists}} = this.props
		if(complate){
			if(!lists.length){
				return (
					<div className="search-empty">
						<img src="http://m.kugou.com/v3/static/images/index/search_empty.png" alt=""/>
						<h5>没有搜索到相关内容</h5>
					</div>
				)
			}
		}else{
			return (
				<Icon style={{display:'block',margin:'10px auto',fontSize:22,color:'silver'}} type="loading" />
			)
		}
	}
	render(){
		const {result:{lists,loading},onSongClick,complate} = this.props
		const actions = [{
			name:'播放',
			key:'play'
		},{
			name:'添加到歌单',
			key:'add'
		},{
			name:'分享',
			key:'share'
		},{
			name:'下载',
			key:'download'
		}]
		return(
			<div className="search-result">
				<Scroll loading={loading} onBottom={this.loadList}>
					{this.renderLoading()}
					<Songlist
						onClick={onSongClick} 
						songs={this.getLists()}
						actions={actions}
						actionComponent={ActionSheet}
					/>
				</Scroll>
			</div>
		)
	}
}

export default Result