import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {unmountComponentAtNode,render} from 'react-dom'
import Loading from './loading'


class Toast {
	static loading(props) {
		this.div = document.createElement('div')
		document.body.appendChild(this.div)
		render(<Loading {...props} />,this.div)
	}
	static close(){
		const unmountResult = unmountComponentAtNode(this.div)
		if(unmountResult && this.div.parentNode){
			this.div.parentNode.removeChild(this.div)
		}
	}
}


export default Toast