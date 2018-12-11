import React,{Component} from 'react'
import {connect} from 'react-redux'
import Icon from '../../components/icon'

import './index.less'

const mapStateToProps = ({singerClasslist:{lists}}) => ({lists})
const mapDispatchToProps = dispatch => ({
	getListRequest:() => {
		dispatch({
			type:'GET_SINGER_CLASSLIST_REQUEST'
		})
	}
})

@connect(mapStateToProps,mapDispatchToProps)
class Singerlist extends Component{
	componentDidMount = () => {
		const {lists,getListRequest} = this.props
		if(!lists.length){
			getListRequest()
		}
	}
	handleClick = info => {
		console.log(info)
	}
	renderItem = interval => {
		const {lists} = this.props
		if(!lists.length){
			return (
				<Icon style={{display:'block',margin:'10px auto',fontSize:22,color:'silver'}} type="loading" />
			)
		}
		const first = lists[0]
		const result = []
		let center = []
		for(let i = 1;i<lists.length;i++){
			center.push((
				<li onClick={this.handleClick.bind(this,lists[i])} key={i} className="singer-item">
					{lists[i].classname}
				</li>
			))
			if(i % interval === 0){
				result.push([...center])
				center = []
			}
		}
		
		return [
			<ul className="singer-group" key={0}>
				<li onClick={this.handleClick.bind(this,first)} className="singer-item">{first.classname}</li>
			</ul>,
			result.map((d,i) => (
				<ul className="singer-group-close" key={i}>
					{d}
				</ul>
			)),
			<ul key={lists.length} className="singer-group">
				{center}
			</ul>
		]
	}
	render(){
		return(
			<div className="singerlist">
				{this.renderItem(3)}
			</div>
		)
	}
}

export default Singerlist