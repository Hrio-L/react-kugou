import React,{Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Card from '../../../components/card'
import Icon from '../../../components/icon'
import Header from '../../../components/header'
import './index.less'


const mapStateToProps = ({singerClasslist:{singerLists,classname}}) => ({singerLists,classname})
const mapDispatchToProps = dispatch => ({
	getListRequest:id => {
		dispatch({
			type:'GET_SINGER_LIST_REQUEST',
			id
		})
	},
	initSingerList:() => {
		dispatch({
			type:'INIT_SINGER_LIST',
			list:[]
		})
	}
})

@connect(mapStateToProps,mapDispatchToProps)
class Singers extends Component{
	componentDidMount = () => {
		const {getListRequest,match:{params:{id}}} = this.props
		getListRequest(id)
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
	render(){
		const {singerLists,classname} = this.props
		return(
			<div className="singer-list">
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
				<Header
					className="singer-classname"
					fixed={true}
					style={{top:50}}
					logo={(
						<Icon onClick={this.handleBack} type="arrow-left" />
					)}
				>{classname}</Header>
				{!singerLists.length && (
					<Icon style={{display:'block',margin:'10px auto',fontSize:22,color:'silver'}} type="loading" />
				)}
				{this.renderSingerList()}
			</div>
		)
	}
}

export default Singers