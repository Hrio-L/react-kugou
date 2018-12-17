import React,{Component} from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './index.less'

class Tag extends Component{
	static defaultProps = {
		classPrefixer:'tag',
		active:false,
		onClick:() => {

		}
	}
	render(){
		const {className,classPrefixer,children,style,active,onClick} = this.props
		const activeClass = active ? `${classPrefixer}-active` : null
		const classes = classNames(classPrefixer,className,activeClass)
		return (
			<span onClick={onClick} style={style} className={classes}>
				{children}
			</span>
		)
	}
}

Tag.propTypes = {
	className:PropTypes.string,
	style:PropTypes.object,
	active:PropTypes.bool,
	onClick:PropTypes.func
}

export default Tag