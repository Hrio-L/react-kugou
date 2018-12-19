import React,{Component} from 'react'
import PropTypes from 'prop-types'

class CacheComponent extends Component{
	constructor(props){
		super(props)
		this.state = {
			component:props.component
		}
	}
	render(){
		const {component:C} = this.state
		const {state,render} = this.props
		return render ? <C {...state} /> : null
	}
}

CacheComponent.propTypes = {
	component:PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.element,
		PropTypes.func
	]),
	render:PropTypes.bool,
	state:PropTypes.object
}

export default CacheComponent