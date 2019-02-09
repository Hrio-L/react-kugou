import React,{Component} from 'react'
import {connect} from 'react-redux'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import {NavLink} from 'react-router-dom'
import Card from '../../../components/card'
import Icon from '../../../components/icon'
import Header from '../../../components/header'
import Scroll from '../../../components/scroll'
import './index.less'


const mapStateToProps = ({singerClasslist:{singerList,classname,page,loading,total}}) => ({singerList,classname,page,loading,total})
const mapDispatchToProps = dispatch => ({
	getList:payload => {
		dispatch({
			type:'GET_SINGER_LIST_REQUEST',
			payload
		})
	},
	loadSinger:payload => {
		dispatch({
			type:'LOAD_SINGER_LIST_REQUEST',
			payload
		})
	},
	initSingerList:() => {
		dispatch({
			type:'INIT_SINGER_LIST'
		})
	},
	showLoading:payload => {
		dispatch({
			type:'CHANGE_SINGER_LIST_LOADING',
			payload
		})
	}
})

@immutableRenderDecorator
@connect(mapStateToProps,mapDispatchToProps)
class Singers extends Component{
	componentDidMount = () => {
		const {getList,page,singerList,match:{params:{id}}} = this.props
		if(id && !singerList.length){
			getList({
				classid:id,
				page
			})
		}
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
		const {singerList} = this.props
		return singerList.map((d,i) => {
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
					extra={(<Icon style={{color:'silver',margin:5,fontSize:18}} type="arrow-right" />)}
				 />
			)
		})
	}
	handleBack = () => {
		const {history} = this.props
		history.go(-1)
	}
	loadList = () => {
		const {loadSinger,page,total,singerList,showLoading,match:{params:{id}}} = this.props
		if(total > singerList.length){
			showLoading(true)
			loadSinger({
				classid:id,
				page:page + 1
			})
		}
	}
	render(){
		const {singerList,classname,loading} = this.props
		return(
			<div className="singer-list">
				{!singerList.length && (
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
								<Icon style={{fontSize:18,color:'white'}} type="search" />
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