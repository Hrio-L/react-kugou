import React,{Component} from 'react'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import {connect} from 'react-redux'
import Tag from '../../../components/tag'
import Icon from '../../../components/icon'

const mapStateToProps = ({search:{hotList,historyList}}) => ({hotList,historyList})
const mapDispatchToProps = dispatch => ({
	getHotList:() => {
		dispatch({
			type:'GET_HOT_SEARCH_LIST'
		})
	},
	removeHistoryItem:payload => {
		dispatch({
			type:'REMOVE_HISTORY_ITEM',
			payload
		})
	},
	emptyHistory: () => {
		dispatch({
			type:'REMOVE_HISTORY_LIST'
		})
	}
})

@immutableRenderDecorator
@connect(mapStateToProps,mapDispatchToProps)
class SearchHistory extends Component{
	componentDidMount = () => {
		const {hotList,getHotList} = this.props
		if(!hotList.length){
			getHotList()
		}
	}
	toSearchResult = keyword => {
		const {history} = this.props
		if(keyword){
			history.push(`/search/${keyword}`)
		}
	}
	renderHotList = () => {
		const {hotList} = this.props
		return hotList.map((d,i) => (
			<Tag onClick={this.toSearchResult.bind(this,d.keyword)} active={d.jumpurl?true:false} key={i}>
				{d.keyword}
			</Tag>
		))
	}
	handleRemove = (keyword,ev) => {
		ev.stopPropagation()
		const {removeHistoryItem} = this.props
		removeHistoryItem(keyword)
	}
	renderHistoryList = () => {
		const {historyList} = this.props
		return historyList.map((d,i) => (
			<li onClick={this.toSearchResult.bind(this,d)} key={d} className="search-history-item">
				<Icon type="clock" />
				<span>{d}</span>
				<Icon onClick={this.handleRemove.bind(this,d)} type="close" />
			</li>
		))
	}
	render(){
		const {historyList,emptyHistory} = this.props
		return(
			<div className="search-history">
				<div className="search-hot">
					<h5>热门搜索</h5>
					{this.renderHotList()}
				</div>
				<div className="search-history-list">
					<ul className="search-history-wrap">
						{this.renderHistoryList()}
					</ul>
					{historyList.length? <h5 onClick={emptyHistory} className="active">清空搜索记录</h5> : <h5>暂无搜索记录</h5>}
				</div>
			</div>
		)
	}
}

export default SearchHistory