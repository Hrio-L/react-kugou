import React,{Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Icon from '../icon'
import './index.less'

class Input extends Component{
	static defaultProps = {
		classPrefixer:'input',
		placeholder:'',
		defaultValue:'',
		style:{},
		circle:true,
		icon:'search',
		iconStyle:{
			color:'silver'
		},
		onChange:() => {}
	}
	state = {
		value:this.props.defaultValue
	}
	handleChange = ev => {
		const {onChange} = this.props
		const {target:{value}} = ev
		this.setState({
			value
		})
		onChange && onChange(value)
	}
	hasPropValue = () => {
		return typeof this.props.value !== 'undifined' 
	}
	render(){
		const {classPrefixer,className,style,circle,icon,iconStyle,placeholder} = this.props
		const classes = classNames(classPrefixer,className)
		const {value} = this.state
		return(
			<div style={{borderRadius:circle&&20,...style}} className={classes}>
				{icon && <Icon style={iconStyle} type={icon} />}
				<input value={value} onChange={this.handleChange} placeholder={placeholder} type="text"/>
			</div>
		)
	}
}

Input.propTypes = {
	className:PropTypes.string,
	defaultValue:PropTypes.string,
	placeholder:PropTypes.string,
	style:PropTypes.object,
	iconStyle:PropTypes.object,
	circle:PropTypes.bool,
	onChange:PropTypes.func,
	value:PropTypes.string
}

export default Input