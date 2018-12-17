import React,{Component} from 'react'
import {connect} from 'react-redux'
import Card from '../../components/card'
import Icon from '../../components/icon'

import './index.less'

const mapStateToProps = ({plist:{lists}}) => ({lists})
const mapDispatchToProps = dispatch => ({
	getListRequest:() => {
		dispatch({
			type:'GET_PLIST_REQUEST'
		})
	}
})

@connect(mapStateToProps,mapDispatchToProps)
class Plist extends Component{
	componentDidMount = () => {
		const {lists,getListRequest} = this.props
		if(!lists.length){
			getListRequest()
		}
	}
	renderCardItem = () => {
		const {lists} = this.props
		return lists.map((d,i) => {
			const {specialname:title,intro:desc,imgurl,specialid:id} = d
			return (
				<Card
					key={i}
					onClick={() => {console.log(d)}}
					source={{
						id,
						title,
						desc,
						avatar:imgurl.replace(/{size}/,100)
					}}
				/>
			)
		})
	}
	render(){
		const {lists} = this.props
		return(
			<div className="plist">
				{!lists.length && (
					<Icon style={{display:'block',margin:'10px auto',fontSize:22,color:'silver'}} type="loading" />
				)}
				{this.renderCardItem()}
			</div>
		)
	}
}

export default Plist