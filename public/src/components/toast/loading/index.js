import React,{Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Icon from '../../../components/icon'
import './index.less'

class ToastLoading extends Component {
	static defaultProps = {
		classPrefixer:'toast-loading'
	}
	render(){
		const {classPrefixer,className,message} = this.props
		const classes = classNames(classPrefixer,className)
		return (
			<div className="toast">
				<div className={classes}>
					<Icon type="loading" />
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
	className:PropTypes.string
}


export default ToastLoading