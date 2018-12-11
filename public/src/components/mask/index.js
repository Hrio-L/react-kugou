import React,{Component} from 'react'
import {unmountComponentAtNode,render} from 'react-dom'
import classNames from 'classnames'
import './index.less'

const div = document.createElement('div')
const Div = props => (<div onClick={props.onClick} className={props.className}>{props.children}</div>)
class Mask{
	static show = ({component:C,props}) => {
		const classes = classNames('mask',props.className)
		document.body.appendChild(div)
		if(C){
			render(
				<Div className={classes} onClick={Mask.close}>
					<C {...props} />
				</Div>,
				div
			)
		}
	}
	static close = (ev) => {
		const unmountResult = unmountComponentAtNode(div)
		if(unmountResult && div.parentNode){
			div.parentNode.removeChild(div)
		}
	}
}

export default Mask