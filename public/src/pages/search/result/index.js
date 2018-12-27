import React,{Component} from 'react'
import {connect} from 'react-redux'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import Scroll from '../../../components/scroll'
import Songlist from '../../../components/songslist'
import Icon from '../../../components/icon'
import ActionSheet from '../../../components/action-sheet'
import BaseHanlder from '../../../common/basehandler'

const mapStateToProps = ({search:{result}}) => ({result})
const mapDispatchToProps = dispatch => ({
	search:payload => {
		dispatch({
			type:'SEARCH_REQUEST',
			payload
		})
	},
	loadResult:payload => {
		dispatch({
			type:'LOAD_RESULT_REQUEST',
			payload
		})
	},
	showLoading:payload => {
		dispatch({
			type:'CHANGE_RESULT_LOADING',
			payload
		})
	},
	initResult :() => {
		dispatch({
			type:'INIT_RESULT'
		})
	}
})

@immutableRenderDecorator
@connect(mapStateToProps,mapDispatchToProps)
@BaseHanlder
class Result extends Component{
	componentDidMount = () => {
		const {match:{params:{keyword}},placeholderChange,search,placeholder} = this.props
		if(keyword){
			if(placeholder !== keyword){
				placeholderChange(keyword)
				search({
					page:1,
					keyword
				})
			}
		}
	}

	componentWillUnmount = () => {
		const {initResult,result:{list}} = this.props
		if(list.length){
			initResult()
		}
	}
	loadList = () => {
		const {result:{page,total,list},match:{params:{keyword}},loadResult,showLoading} = this.props
		if(total > list.length){
			showLoading(true)
			loadResult({
				keyword,
				page:page + 1
			})
		}
	}
	getLists = () => {
		const {result:{list}} = this.props
		return list.map((d,i) => ({
			name:d.songname,
			id:d.hash,
			author:d.singername
		}))
	}
	renderLoading = () => {
		const {result:{complate,list}} = this.props
		if(complate){
			if(!list.length){
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
		const {result:{list,loading},onSongClick,complate} = this.props
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