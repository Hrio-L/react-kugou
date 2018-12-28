import React,{PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Icon from '../../../components/icon'
import {ToastComponent} from '../'

class ToastLoading extends PureComponent {
	static defaultProps = {
		classPrefixer:'toast-loading'
	}
	render(){
		const {classPrefixer,className,message,iconStyle,style} = this.props
		const classes = classNames(classPrefixer,className)
		return (
			<ToastComponent>
				<div style={style} className={classes}>
					<Icon type="loading" />
					<span className="toast-message">{message || '加载中 ...'}</span>
				</div>
			</ToastComponent>				
		)
	}
}

ToastLoading.propTypes = {
	message:PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.node
	]),
	className:PropTypes.string,
	style:PropTypes.object
}


export default ToastLoading