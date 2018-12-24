import React from 'react'
import {unmountComponentAtNode,render} from 'react-dom'
import classNames from 'classnames'
import './index.less'

const div = document.createElement('div')
export const MaskComponent = props => {
	const classes = classNames('mask',props.className)
	return (
		<div onClick={props.onClick} onClick={() => {Mask.close();props.onClick&&props.onClick()}} className={classes}>{props.children}</div>
	)
}


class Mask{
	static show = option => {
		document.body.appendChild(div)
		if(option){
			const {component:C,props} = option
			render(
				<MaskComponent className={props.className} >
					<C {...props} />
				</MaskComponent>,
				div
			)
		}else{
			render(
				<MaskComponent />,
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