import React,{Component} from 'react'
import classNames from 'classnames'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Icon from '../../components/icon'
import Player from '../../components/player'
import Authorized from '../../components/authorized'
import './index.less'

const mapStateToProps = ({search:{hotLists}}) => ({hotLists})
const mapDispatchToProps = dispatch => ({
	getHotList:() => {
		dispatch({
			type:'GET_HOT_SEARCH_LIST'
		})
	},
	searchRequest:keyword => {
		dispatch({
			type:'SEARCH_REQUEST',
			keyword
		})
	}
})

@connect(mapStateToProps,mapDispatchToProps)
class Search extends Component{
	state = {
		keyword:''
	}
	componentDidMount = () => {
		const {hotLists,getHotList} = this.props
		if(!hotLists.length){
			getHotList()
		}
	}
	valueChange = ev => {
		this.setState({
			keyword:ev.target.value
		})
	}
	handleBack = () => {
		const {history} = this.props
		history.go(-1)
	}
	handleSearch = () => {
		const {searchRequest} = this.props
		const {keyword} = this.state
		if(keyword){
			searchRequest(keyword)
		}
	}
	render(){
		const {keyword} = this.state
		const {routes,hotLists} = this.props
		return (
			<div className="search">
				<header className="search-head">
					<Icon onClick={this.handleBack} type="arrow-left" />
					<input placeholder="搜索你喜欢的歌曲" className="search-input" onChange={this.valueChange} value={keyword} type="text"/>
					<span onClick={this.handleSearch} className="search-btn">搜索</span>
				</header>
				<Authorized  routes={routes} />
				<Player />
			</div>
		)
	}
}

export default Search