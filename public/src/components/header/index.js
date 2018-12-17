import React,{Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './index.less'

class Header extends Component{
	static defaultProps = {
		classPrefixer:'header',
		fixed:false
	}
	render(){
		const {extra,logo,style,className,classPrefixer,children,fixed} = this.props
		const initialStyle = fixed ? {position:'fixed',top:0,left:0,...style} : style
		const classes = classNames(classPrefixer,className)
		return(
			<div style={initialStyle} className={classes}>
				<div className={`${classPrefixer}-logo`}>
					{logo}
				</div>
				<div className={`${classPrefixer}-center`}>
					{children}
				</div>
				<div className={`${classPrefixer}-extra`}>
					{extra}
				</div>
			</div>
		)
	}
}

Header.propTypes = {
	fixed:PropTypes.bool,
	logo:PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.element,
		PropTypes.string
	]),
	extra:PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.element,
		PropTypes.string
	]),
	style:PropTypes.object,
	className:PropTypes.string,
	children:PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.element,
		PropTypes.string
	])
}

export default Header