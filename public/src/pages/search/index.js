import React,{Component} from 'react'
import classNames from 'classnames'
import {connect} from 'react-redux'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import {NavLink} from 'react-router-dom'
import Icon from '../../components/icon'
import Player from '../../components/player'
import Authorized from '../../components/authorized'
import Input from '../../components/input'
import './index.less'


@immutableRenderDecorator
class Search extends Component{
	state = {
		keyword:'',
		placeholder:'歌手/歌名/拼音'
	}
	componentDidMount = () => {
		window.addEventListener('keydown',this.onPress,false)
	}
	shouldComponentUpdate = (nextProps,nextState) => {
		if(nextState.keyword !== this.state.keyword){
			return false
		}
		return true
	}
	componentWillUnmount = () => {
		window.removeEventListener('keydown',this.onPress,false)
	}
	onPress = ev => {
		if(ev.keyCode === 13){
			this.handleSearch()
		}
	}
	handleBack = () => {
		const {history} = this.props
		history.go(-1)
	}
	handleSearch = () => {
		const {history} = this.props
		const {keyword} = this.state
		if(keyword){
			history.push(`/search/${keyword}`)
		}
	}
	handleCancel = () => {
		this.props.history.push('/search')
	}
	inputChange = value => {
		this.setState({
			keyword:value
		})
	}
	placeholderChange = value => {
		this.setState({
			placeholder:value
		})
	}
	render(){
		const {routes} = this.props
		const {keyword,placeholder} = this.state
		return (
			<div className="search">
				<header className="search-head">
					<Icon onClick={this.handleBack} type="arrow-left" />
					<Input  placeholder={placeholder} className="search-input" value={keyword} circle={true} onChange={this.inputChange} />
					{placeholder === '歌手/歌名/拼音'  ? (
						<span onClick={this.handleSearch} className="search-btn">搜索</span>
					) : (
						<span onClick={this.handleCancel} className="search-btn">
							取消
						</span>
					)}
				</header>
				<Authorized placeholder={placeholder} placeholderChange={this.placeholderChange} routes={routes} />
				<Player />
			</div>
		)
	}
}

export default Search