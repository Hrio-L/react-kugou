import React,{Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Card from '../../components/card'
import Icon from '../../components/icon'
import Scroll from '../../components/scroll'

import './index.less'

const mapStateToProps = ({plist:{lists,total,page,loading}}) => ({lists,total,page,loading})
const mapDispatchToProps = dispatch => ({
	getListRequest:page => {
		dispatch({
			type:'GET_PLIST_REQUEST' ,
			page
		})
	},
	showLoading:() => {
		dispatch({
			type:'CHANGE_PLIST_LOADING_STATE',
			loading:true
		})
	}
})

@connect(mapStateToProps,mapDispatchToProps)
class Plist extends Component{
	componentDidMount = () => {
		const {lists,getListRequest,page} = this.props
		if(!lists.length){
			getListRequest(page)
		}
	}
	componentWillUnmount  = () => {
	}
	toDetail = id => {
		const {history} = this.props
		history.push(`/plist/${id}`)
	}
	renderCardItem = () => {
		const {lists} = this.props
		return lists.map((d,i) => {
			const {specialname:title,playcount,imgurl,specialid:id} = d
			return (
				<Card
					key={i}
					onClick={this.toDetail.bind(this,d.specialid)}
					source={{
						id,
						title,
						desc:(
							<span>
								<Icon type="headphone" style={{fontSize:5,color:'silver',marginRight:5}} />
								{playcount}
							</span>
						),
						avatar:imgurl.replace(/{size}/,100)
					}}
				/>
			)
		})
	}
	loadList = () => {
		const {total,lists,page,getListRequest,showLoading} = this.props
		if(total > lists.length){
			showLoading()
			getListRequest(page)
		}
	}
	render(){
		const {lists,total,isTop,loading} = this.props
		return(
			<div className="plist">
				<Scroll loading={loading} onBottom={this.loadList} isTop={isTop} timeout={300} style={{paddingTop:91,paddingBottom:70}}>
					{!lists.length && (
						<Icon style={{display:'block',margin:'10px auto',fontSize:22,color:'silver'}} type="loading" />
					)}
					{this.renderCardItem()}
				</Scroll>
			</div>
		)
	}
}

export default withRouter(Plist)