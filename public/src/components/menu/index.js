import React,{Component,Children} from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './index.less'

class Menu extends Component{
	static defaultProps = {
		classPrefixer:'menu',
		defaultSelected:''
	}
	renderChild = () => {
		const {children,classPrefixer,defaultSelected} = this.props
		return Children.map(children,(child,i) => {
			const classes = classNames({
				[`${classPrefixer}-item`]:true,
				[`${classPrefixer}-item-active`]:defaultSelected === child.key
			})
			return (
				<li key={i} className={classes}>
					{child}
				</li>
			)
		})
	}
	initStyle = () => {
		const {fixed,style} = this.props
		const fixedStyle = {
			position:'fixed',
			top:0,
			left:0,
			width:'100%',
			zIndex:99
		}
		return fixed
		? {
			...fixedStyle,
			...style
		} 
		: style
	}
	render(){
		const {classPrefixer,className} = this.props
		const classes = classNames(classPrefixer,className)

		return(
			<div style={this.initStyle()} className={classes}>
				<ul className={`${classPrefixer}-wrap`}>
					{this.renderChild()}
				</ul>
			</div>
		)
	}
}

Menu.propTypes = {
	children:PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.element
	]).isRequired,
	className:PropTypes.string,
	fixed:PropTypes.bool
}

export default Menu