import React,{Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Icon from '../../components/icon'
import Scroll from '../../components/scroll'

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
		const {history} = this.props
		history.push(`/singerclass/${info.classid}`)
	}
	renderItem = interval => {
		const {lists} = this.props
		if(!lists.length){
			return null
		}
		const first = lists[0]
		const result = []
		let center = []
		for(let i = 1;i<lists.length;i++){
			center.push((
				<li onClick={this.handleClick.bind(this,lists[i])} key={i} className="singer-item">
					{lists[i].classname}
					<Icon type="arrow-right" />
				</li>
			))
			if(i % interval === 0){
				result.push([...center])
				center = []
			}
		}
		
		return [
			<ul className="singer-group" key={0}>
				<li onClick={this.handleClick.bind(this,first)} className="singer-item">
					{first.classname}
					<Icon type="arrow-right" />
				</li>
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
		const {lists,isTop} = this.props
		return(
			<div className="singerlist">
				<Scroll isTop={isTop} timeout={300} style={{paddingTop:91,paddingBottom:70}}>
					{!lists.length && (
						<Icon style={{display:'block',margin:'10px auto',fontSize:22,color:'silver'}} type="loading" />
					)}
					{this.renderItem(3)}
				</Scroll>
			</div>
		)
	}
}

export default withRouter(Singerlist)