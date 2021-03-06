import React,{PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Icon from '../icon'
import './index.less'

class Input extends PureComponent{
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
	handleFocus = () => {
		const {onFocus} = this.props
		onFocus && onFocus()
	}
	hasPropValue = () => {
		return typeof this.props.value !== 'undifined' 
	}
	render(){
		const {classPrefixer,className,style,circle,icon,iconStyle,placeholder,autoFocus} = this.props
		const classes = classNames(classPrefixer,className)
		const {value} = this.state
		return(
			<div style={{borderRadius:circle&&20,...style}} className={classes}>
				{icon && <Icon style={iconStyle} type={icon} />}
				<input onFocus={this.handleFocus} autoFocus={autoFocus} value={value} onChange={this.handleChange} placeholder={placeholder} type="text"/>
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
	onFocus:PropTypes.func,
	value:PropTypes.string,
	autoFocus:PropTypes.bool
}

export default Input