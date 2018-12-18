import React,{Component} from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Icon from '../icon'
import './index.less'

class Collapse extends Component{
	static defaultProps = {
		classPrefixer:'collapse',
		open:false
	}
	constructor(props){
		super(props)
		this.state = {
			visible:props.open
		}
	}
	handleClick = () => {
		this.setState({
			visible:!this.state.visible
		})
	}
	render(){
		const {visible} = this.state
		const {classPrefixer,className,header,children} = this.props
		const classes = classNames({
			[`${classPrefixer}`]:true,
			[`${className}`]:className,
			[`${classPrefixer}-active`]:visible
		})
		const iconType = visible ? 'arrow-up' : 'arrow-down'

		return(
			<div className={classes}>
				<div className={`${classPrefixer}-head`}>
					{header}
					<Icon onClick={this.handleClick} type={iconType} />
				</div>
				<div className={`${classPrefixer}-content`}>
					{children}
				</div>
			</div>
		)
	}
}

Collapse.propTypes = {
	className:PropTypes.string,
	header:PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
		PropTypes.element
	]).isRequired,
	children:PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
		PropTypes.element
	]),
	open:PropTypes.bool
}

export default Collapse