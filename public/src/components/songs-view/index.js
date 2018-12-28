import React,{PureComponent} from 'react'
import {NavLink,withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Icon from '../icon'
import Songslist from '../songslist'
import Header from '../header'
import ActionSheet from '../action-sheet'
import Collapse from '../collapse'
import './index.less'

class SongsView extends PureComponent{
	static defaultProps = {
		classPrefixer:'songs'
	}
	getSongs = () => {
		const {list} = this.props
		return list.map((d,i) => {
			const info = d.filename.trim().split(' - ')
			const author =info[0]
			const name = info[1]
			const id = d.hash
			return {
				name,
				author,
				id
			}
		})
	}
	handleBack = () => {
		const {history} = this.props
		history.go(-1)
	}

	render(){
		const {banner,title,footText,className,classPrefixer,list,collapse,onSongClick,actions} = this.props
		const classes = classNames(`${classPrefixer}-view`,className)
		return (
			<div className={classes}>
				{!list.length && (
					<Icon style={{display:'block',margin:'10px auto',fontSize:22,color:'silver'}} type="loading" />
				)}
				<Header 
					fixed={true}
					logo={(
						<img src="http://m.kugou.com/v3/static/images/index/logo.png" alt="logo"/>
					)} 
					extra={(
						<NavLink to="/search">
							<Icon style={{fontSize:18,color:'white'}} type="search" />
						</NavLink>
						)}
				/>
				<div className={`${classPrefixer}-banner`}>
					{title && (
						<Header
							logo={(
								<Icon onClick={this.handleBack} style={{fontSize:8}} type="arrow-left" />
							)}
							fixed={true}
							style={{top:50}}
						 	className="banner-head"
						 >
							<span>{title}</span>
						</Header>
					)}
					{banner && ( <img src={banner} alt="banner"/>)}
					{footText && (
						<Header
							logo={(
								<span>更新时间：{footText}</span>
							)}
							style={{position:'absolute',bottom:0,top:'none',zIndex:0}}
						 	className="banner-foot"
						 />
					)}
				</div>
				{(list.length  && collapse) ? (
					<Collapse header={collapse.header}>
						{collapse.content}
					</Collapse>
				):null}
				<Songslist 
					onClick={onSongClick} 
					songs={this.getSongs()} 
					actions={actions}
					actionComponent={ActionSheet} 
				/>
			</div>
		)
	}
}

SongsView.propTypes = {
	onSongClick:PropTypes.func,
	list:PropTypes.array.isRequired,
	title:PropTypes.string,
	footText:PropTypes.string,
	banner:PropTypes.string,
	className:PropTypes.string,
	collapse:PropTypes.shape({
		header:PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.node,
			PropTypes.element
		]),
		content:PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.node,
			PropTypes.element
		])
	}),
	actions:PropTypes.array
}

export default withRouter(SongsView)