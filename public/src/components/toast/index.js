import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {unmountComponentAtNode,render} from 'react-dom'
import Loading from './loading'
import './index.less'

export const ToastComponent = props => (
	<div className="toast">
		<div className="toast-bg">
			<span style={props.style} className="toast-message">
				{props.children}
			</span>
		</div>
	</div>
)


class Toast {
	static loading(props) {
		this.div = document.createElement('div')
		document.body.appendChild(this.div)
		render(<Loading {...props} />,this.div)
		if(props.duration){
			this.timer = setTimeout(() => {
				Toast.close()
			},props.duration * 1000)
		}
	}
	static show(props){
		this.div = document.createElement('div')
		document.body.appendChild(this.div)
		render(<ToastComponent style={props.style}>{props.message}</ToastComponent>,this.div)
		if(props.duration){
			this.timer = setTimeout(() => {
				Toast.close()
			},props.duration * 1000)
		}
	}
	static close(){
		const unmountResult = unmountComponentAtNode(this.div)
		if(unmountResult && this.div.parentNode){
			this.div.parentNode.removeChild(this.div)
			clearTimeout(this.timer)
		}
	}
}


export default Toast