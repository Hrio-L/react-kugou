import React,{Component} from 'react'
import {connect} from 'react-redux'
import Tag from '../../components/tag'
import Icon from '../../components/icon'

const mapStateToProps = ({search:{hotLists,historyLists}}) => ({hotLists,historyLists})
const mapDispatchToProps = dispatch => ({
	removeHistoryItem:id => {
		dispatch({
			type:'REMOVE_HISTORY_ITEM',
			id
		})
	},
	emptyHistory: () => {
		dispatch({
			type:'REMOVE_HISTORY_LIST'
		})
	}
})

@connect(mapStateToProps,mapDispatchToProps)
class SearchHistory extends Component{
	renderHotList = () => {
		const {hotLists} = this.props
		return hotLists.map((d,i) => (
			<Tag active={d.jumpurl?true:false} key={i}>
				{d.keyword}
			</Tag>
		))
	}
	renderHistoryList = () => {
		const {historyLists,removeHistoryItem} = this.props
		return historyLists.map((d,i) => (
			<li key={i} className="search-history-item">
				<Icon type="clock" />
				<span>{d.keyword}</span>
				<Icon onClick={removeHistoryItem.bind(this,d.id)} type="close" />
			</li>
		))
	}
	render(){
		const {historyLists,emptyHistory} = this.props
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
					{historyLists.length? <h5 onClick={emptyHistory} className="active">清空搜索记录</h5> : <h5>暂无搜索记录</h5>}
				</div>
			</div>
		)
	}
}

export default SearchHistory