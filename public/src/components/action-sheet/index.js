import React,{PureComponent} from 'react'
import {render,unmountComponentAtNode} from 'react-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Mask from '../../components/mask'
import './index.less'


export const AactinContent = props => {
	const {onCancel,classPrefixer,actions,info,cancelButtomVisible,align} = props
	const style={
		textAlign:align
	}
	const renderItem = lists => {
		return lists.map((d,i) => {
			const events = {
				onClick:d.onClick
			}
			if(typeof d === 'object'){
				if(d.$$typeof){
					return (
						<li style={style} {...events} key={i} className={`${classPrefixer}-item`}>
							{d}
						</li>
					)
				}
				return (
					<li style={style} key={i} {...events} className={`${classPrefixer}-item`}>
						{d.name}
					</li>
				)	
			}else{
				return (
					<li style={style} key={i} {...events} className={`${classPrefixer}-item`}>
						{d}
					</li>
				)
			}
		})
	}
	return (
		<div onClick={ev=>ev.stopPropagation()} className={`${classPrefixer}-list`}>
			{
				info && (
					<div className={`${classPrefixer}-info`}>
						<h5 className="name">
							{info.name}
						</h5>
						<span className="desc">{info.desc}</span>
					</div>
				)
			}
			<ul className={`${classPrefixer}-wrap`}>
				{renderItem(actions)}
			</ul>
			<span className={`${classPrefixer}-cancel-mask`}></span>
			{cancelButtomVisible&&(
				<div onClick={onCancel} className={`${classPrefixer}-cancel`}>
					取消
				</div>
			)}
		</div>
	)
}

class ActionSheet extends PureComponent {
	static defaultProps = {
		classPrefixer:'action',
		cancelButtomVisible:true
	}
	constructor(props){
		super(props)
	}
	
	showAction = ev => {
		ev.stopPropagation()
		const {classPrefixer,actions,info,cancelButtomVisible,align} = this.props
		Mask.show({
			component:AactinContent,
			props:{
				className:'action-sheet',
				onCancel:Mask.close,
				classPrefixer,
				actions,
				info,
				cancelButtomVisible,
				align
			}
		})
	}


	render(){
		const {children,classPrefixer,className} = this.props
		const classes = classNames(`${classPrefixer}-sheet`,className)
		
		return(
			<div onClick={this.showAction} className={classes}>
				{children}
			</div>
		)
	}
}

ActionSheet.propTypes = {
	info:PropTypes.shape({
		name:PropTypes.string,
		id:PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
		]),
		desc:PropTypes.string
	}),
	actions:PropTypes.arrayOf(
		PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.node,
			PropTypes.object
		])
	).isRequired,
	children:PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
		PropTypes.node
	]).isRequired,
	className:PropTypes.string,
	cancelButtomVisible:PropTypes.bool,
	align:PropTypes.string,
	index:PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
		PropTypes.element
	]),
	extra:PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
		PropTypes.element
	])
}

export default ActionSheet