import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon'
import classNames from 'classnames'
import './index.less'

class Card extends Component{
	static defaultProps = {
		classPrefixer:'card'
	}
	handleClick = data => {
		const {onClick} = this.props
		onClick && onClick(data)
	}
	render(){
		const {source,className,classPrefixer} = this.props
		const {title,desc,avatar} = source
		const classes = classNames(classPrefixer,className)
	    return (
	        <div onClick={this.handleClick.bind(this,source)} className={classes}>
				<div className={`${classPrefixer}-item`}>
					{avatar && <img src={avatar} alt="" className="avatar"/>}
					<div className="info">
						<h5 className="title">{title}</h5>
						<span>{desc}</span>
					</div>
					<Icon type="arraw-right" />
				</div>
			</div>
	    )
	}
}

Card.propTypes = {
    source:PropTypes.shape({
    	id:PropTypes.number,
    	title: PropTypes.oneOfType([
	        PropTypes.string,
	        PropTypes.node,
	        PropTypes.func
	    ]),
	    desc: PropTypes.oneOfType([
	        PropTypes.string,
	        PropTypes.node,
	        PropTypes.func
	    ]),
	    avatar: PropTypes.string,
    }).isRequired,
    onClick:PropTypes.func,
    className:PropTypes.string
}

export default Card