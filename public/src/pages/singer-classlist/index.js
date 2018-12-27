import React,{Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import Icon from '../../components/icon'
import Scroll from '../../components/scroll'

import './index.less'

const mapStateToProps = ({singerClasslist:{classList}}) => ({classList})
const mapDispatchToProps = dispatch => ({
	getListRequest:() => {
		dispatch({
			type:'GET_SINGER_CLASSLIST_REQUEST'
		})
	}
})

@immutableRenderDecorator
@connect(mapStateToProps,mapDispatchToProps)
class Singerlist extends Component{
	componentDidMount = () => {
		const {classList,getListRequest} = this.props
		if(!classList.length){
			getListRequest()
		}
	}
	handleClick = info => {
		const {history} = this.props
		history.push(`/singerclass/${info.classid}`)
	}
	renderItem = interval => {
		const {classList} = this.props
		if(!classList.length){
			return null
		}
		const first = classList[0]
		const result = []
		let center = []
		for(let i = 1;i<classList.length;i++){
			center.push((
				<li onClick={this.handleClick.bind(this,classList[i])} key={i} className="singer-item">
					{classList[i].classname}
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
			<ul key={classList.length} className="singer-group">
				{center}
			</ul>
		]
	}
	render(){
		const {classList,isTop} = this.props
		return(
			<div className="singerlist">
				<Scroll isTop={isTop} timeout={300} style={{paddingTop:91,paddingBottom:70}}>
					{!classList.length && (
						<Icon style={{display:'block',margin:'10px auto',fontSize:22,color:'silver'}} type="loading" />
					)}
					{this.renderItem(3)}
				</Scroll>
			</div>
		)
	}
}

export default withRouter(Singerlist)