import React,{PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Icon from '../../../components/icon'
import './index.less'

class ToastLoading extends PureComponent {
	static defaultProps = {
		classPrefixer:'toast-loading'
	}
	render(){
		const {classPrefixer,className,message,iconStyle} = this.props
		const classes = classNames(classPrefixer,className)
		return (
			<div className="toast">
				<div className={classes}>
					<Icon style={iconStyle} type="loading" />
					<span className="toast-message">{message || '加载中 ...'}</span>
				</div>
			</div>
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
	iconStyle:PropTypes.object
}


export default ToastLoading