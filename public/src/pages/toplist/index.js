import React,{Component} from 'react'
import {connect} from 'react-redux'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import {withRouter} from 'react-router-dom'
import Card from '../../components/card'
import Icon from '../../components/icon'
import Scroll from '../../components/scroll'
import './index.less'

const mapStateToProps = ({toplist:{list}}) => ({list})
const mapDispatchToProps = dispatch => ({
	getListRequest:() => {
		dispatch({
			type:'GET_TOPLIST_REQUEST'
		})
	}
})

@immutableRenderDecorator
@connect(mapStateToProps,mapDispatchToProps)
class Toplist extends Component{
	componentDidMount = () => {
		const {list,getListRequest} = this.props
		if(!list.length){
			getListRequest()
		}
	}
	toRank = id => {
		const {history} = this.props
		history.push('/rank/' + id)
	}
	renderCardItem = () => {
		const {list} = this.props
		return list.map((d,i) => {
			const {rankname:title,imgurl,rankid:id,update_frequency:desc} = d
			return (
				<Card 
					onClick={this.toRank.bind(this,d.rankid)}
					key={i} 
					source={{
						id,
						title,
						desc,
						avatar:imgurl.replace(/{size}/g,640),
					}}
					extra={(<Icon style={{color:'silver',margin:5,fontSize:20}} type="arrow-right" />)}
				 />
			)
		})
	}
	render(){
		const {list,isTop} = this.props
		return(
			<div className="toplist">
				<Scroll isTop={isTop} timeout={300} style={{paddingTop:91,paddingBottom:70}}>
					{!list.length && (
						<Icon style={{display:'block',margin:'10px auto',fontSize:22,color:'silver'}} type="loading" />
					)}
					{this.renderCardItem()}
				</Scroll>
			</div>
		)
	}
}

export default withRouter(Toplist)