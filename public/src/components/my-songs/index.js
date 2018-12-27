import React,{PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Icon from '../icon'
import './index.less'

class MySongs extends PureComponent{
	static defaultProps = {
		clsassPrefixer:'my-songs'
	}
	handleRemove = (id,ev) => {
		ev.stopPropagation()
		const {removeItem} = this.props
		removeItem && removeItem(id)
	}
	handleClick = (row,ev) => {
		const {onClick} = this.props
		ev.stopPropagation()
		onClick && onClick(row)
	}
	renderItem = () => {
		const {songs,clsassPrefixer} = this.props
		return songs.map((d,i) => (
			<li key={`mysong-${d.id}`} onClick={this.handleClick.bind(this,d)} className={`${clsassPrefixer}-item`}>
				<h5>{d.name}</h5>
				-
				<span>{d.author}</span>
				<Icon onClick={this.handleRemove.bind(this,d.id)} type="close" />
			</li>
		))
	}
	render(){
		const {clsassPrefixer,className,songs,style,logo,extra} = this.props
		const classes = classNames(clsassPrefixer,className)
		return (
			<div onClick={ev=>ev.stopPropagation()} style={style} className={classes}>
				<div className={`${clsassPrefixer}-header`}>
					{logo && logo}
					{extra && extra}
				</div>
				<ul className={`${clsassPrefixer}-lists`}>
					{this.renderItem()}
				</ul>
				{!songs.length && (
					<h5 className="empty">你的列表怎么空了</h5>
				)}
			</div>
		)
	}
}

export default MySongs