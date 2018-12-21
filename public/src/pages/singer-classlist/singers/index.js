import React,{Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Card from '../../../components/card'
import Icon from '../../../components/icon'
import Header from '../../../components/header'
import Scroll from '../../../components/scroll'
import './index.less'


const mapStateToProps = ({singerClasslist:{singerLists,classname,page,loading,total}}) => ({singerLists,classname,page,loading,total})
const mapDispatchToProps = dispatch => ({
	getListRequest:(id,page) => {
		dispatch({
			type:'GET_SINGER_LIST_REQUEST',
			id,
			page
		})
	},
	initSingerList:() => {
		dispatch({
			type:'INIT_SINGER_LIST'
		})
	},
	showLoading:() => {
		dispatch({
			type:'CHANGE_SINGER_LIST_LOADING',
			loading:true
		})
	}
})

@connect(mapStateToProps,mapDispatchToProps)
class Singers extends Component{
	componentDidMount = () => {
		const {getListRequest,page,match:{params:{id}}} = this.props
		getListRequest(id,page)
	}
	componentWillUnmount = () => {
		const {initSingerList} = this.props
		initSingerList()
	}
	toSingerSongs = id => {
		const {history} = this.props
		history.push(`/singer/${id}`)
	}
	renderSingerList = () => {
		const {singerLists} = this.props
		return singerLists.map((d,i) => {
			const {singerid:id,singername:title,imgurl} = d
			return (
				<Card 
					onClick={this.toSingerSongs.bind(this,id)}
					key={i}
					source={{
						id,
						title,
						avatar:imgurl.replace(/{size}/g,200)
					}}
					extra={(<Icon style={{color:'silver',padding:5,fontSize:8}} type="arrow-right" />)}
				 />
			)
		})
	}
	handleBack = () => {
		const {history} = this.props
		history.go(-1)
	}
	loadList = () => {
		const {getListRequest,page,total,singerLists,showLoading,match:{params:{id}}} = this.props
		if(total > singerLists.length){
			showLoading()
			getListRequest(id,page)
		}
	}
	render(){
		const {singerLists,classname,loading} = this.props
		return(
			<div className="singer-list">
				{!singerLists.length && (
					<Icon style={{display:'block',margin:'55px auto',fontSize:22,color:'silver'}} type="loading" />
				)}
				<Scroll style={{paddingBottom:70}} loading={loading} onBottom={this.loadList}>
					<Header 
						fixed={true}
						logo={(
							<img src="http://m.kugou.com/v3/static/images/index/logo.png" alt="logo"/>
						)} 
						extra={(
							<NavLink to="/search">
								<Icon style={{fontSize:18}} type="search" />
							</NavLink>
							)}
					/>
					{classname && (
						<Header
							className="singer-classname"
							fixed={true}
							style={{top:50}}
							logo={(
								<Icon onClick={this.handleBack} type="arrow-left" />
							)}
						>{classname}</Header>
					)}
					{this.renderSingerList()}
				</Scroll>
			</div>
		)
	}
}

export default Singers