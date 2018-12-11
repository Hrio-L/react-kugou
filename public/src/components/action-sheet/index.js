import React,{Component} from 'react'
import {render,unmountComponentAtNode} from 'react-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Mask from '../../components/mask'
import './index.less'


export const AactinContent = props => {
	const {onCancel,classPrefixer,actions,info,onClick} = props

	const renderItem = lists => {
		return lists.map((d,i) => {
			const events = {
				onClick:onClick.bind(null,d)
			}
			if(typeof d === 'object'){
				if(d.$$typeof){
					return (
						<li {...events} key={i} className={`${classPrefixer}-item`}>
							{d}
						</li>
					)
				}
				return (
					<li key={i} {...events} className={`${classPrefixer}-item`}>
						{d.name}
					</li>
				)	
			}else{
				return (
					<li key={i} {...events} className={`${classPrefixer}-item`}>
						{d}
					</li>
				)
			}
		})
	}
	return (
		<div onClick={ev=>ev.stopPropagation()} className={`${classPrefixer}-list`}>
			<div className={`${classPrefixer}-info`}>
				<h5 className="name">
					{info.name}
				</h5>
				<span className="desc">{info.author}</span>
			</div>
			<ul className={`${classPrefixer}-wrap`}>
				{renderItem(actions)}
			</ul>
			<span className={`${classPrefixer}-cancel-mask`}></span>
			<div onClick={onCancel} className={`${classPrefixer}-cancel`}>
				取消
			</div>
		</div>
	)
}

class ActionSheet extends Component {
	static defaultProps = {
		classPrefixer:'action'
	}
	constructor(props){
		super(props)
	}
	
	showAction = ev => {
		ev.stopPropagation()
		const {classPrefixer,actions,info} = this.props
		Mask.show({
			component:AactinContent,
			props:{
				className:'action-sheet',
				onCancel:Mask.close,
				classPrefixer,
				actions,
				info,
				onClick:this.handleClick
			}
		})
	}

	handleClick = (row,ev) => {
		const {onClick} = this.props
		ev.stopPropagation()
		if(onClick){
			onClick(row)
		}
	}
	handleCancel = ev => {
		ev.stopPropagation()
		this.startScroll()
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
		name:PropTypes.string.isRequired,
		id:PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
		]),
		author:PropTypes.string.isRequired
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
	className:PropTypes.string
}

export default ActionSheet