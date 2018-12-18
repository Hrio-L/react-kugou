import React,{Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
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

export default withRouter(Plist)