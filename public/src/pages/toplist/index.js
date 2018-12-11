import React,{Component} from 'react'
import {connect} from 'react-redux'
import Card from '../../components/card'
import Icon from '../../components/icon'
import './index.less'

const mapStateToProps = ({toplist:{lists}}) => ({lists})
const mapDispatchToProps = dispatch => ({
	getListRequest:() => {
		dispatch({
			type:'GET_TOPLIST_REQUEST'
		})
	}
})

@connect(mapStateToProps,mapDispatchToProps)
class Toplist extends Component{
	componentDidMount = () => {
		const {lists,getListRequest} = this.props
		if(!lists.length){
			getListRequest()
		}
	}

	renderCardItem = () => {
		const {lists} = this.props
		if(!lists.length){
			return (
				<Icon style={{display:'block',margin:'10px auto',fontSize:22,color:'silver'}} type="loading" />
			)
		}
		return lists.map((d,i) => {
			const {rankname:title,imgurl,rankid:id,update_frequency:desc} = d
			return (
				<Card 
					onClick={row => {console.log(d)}}
					key={i} 
					source={{
						id,
						title,
						desc,
						avatar:imgurl.replace(/{size}/g,640)
					}}
				 />
			)
		})
	}
	render(){
		return(
			<div className="toplist">
				{this.renderCardItem()}
			</div>
		)
	}
}

export default Toplist