import React,{Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import Card from '../../components/card'
import Icon from '../../components/icon'
import Scroll from '../../components/scroll'

import './index.less'

const mapStateToProps = ({plist:{list,total,page,loading}}) => ({list,total,page,loading})
const mapDispatchToProps = dispatch => ({
	getList:payload => {
		dispatch({
			type:'GET_PLIST_REQUEST' ,
			payload
		})
	},
	loadList:payload => {
		dispatch({
			type:'LOAD_PLIST_REQUEST' ,
			payload
		})
	},
	showLoading:payload => {
		dispatch({
			type:'CHANGE_PLIST_LOADING_STATE',
			payload
		})
	}
})

@immutableRenderDecorator
@connect(mapStateToProps,mapDispatchToProps)
class Plist extends Component{
	componentDidMount = () => {
		const {list,getList} = this.props
		if(!list.length){
			getList({
				page:1
			})
		}
	}
	componentWillUnmount  = () => {
	}
	toDetail = id => {
		const {history} = this.props
		history.push(`/plist/${id}`)
	}
	renderCardItem = () => {
		const {list} = this.props
		return list.map((d,i) => {
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
								<Icon style={{fontSize:3,color:'silver',marginRight:5}} type="headphone"/>
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
		const {total,list,page,loadList,showLoading} = this.props
		if(total > list.length){
			showLoading(true)
			loadList({
				page:page + 1
			})
		}
	}
	render(){
		const {list,total,isTop,loading} = this.props
		return(
			<div className="plist">
				<Scroll loading={loading} onBottom={this.loadList} isTop={isTop} timeout={300} style={{paddingTop:91,paddingBottom:70}}>
					{!list.length && (
						<Icon style={{display:'block',margin:'10px auto',fontSize:22,color:'silver'}} type="loading" />
					)}
					{this.renderCardItem()}
				</Scroll>
			</div>
		)
	}
}

export default withRouter(Plist)