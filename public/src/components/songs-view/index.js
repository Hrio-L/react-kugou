import React,{Component} from 'react'
import {NavLink,withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Icon from '../icon'
import Songslist from '../songslist'
import Header from '../header'
import ActionSheet from '../action-sheet'
import './index.less'

class SongsView extends Component{
	static defaultProps = {
		classPrefixer:'songs'
	}
	getSongs = () => {
		const {lists} = this.props
		return lists.map((d,i) => {
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
		const {banner,title,footText,className,classPrefixer,lists} = this.props
		const classes = classNames(`${classPrefixer}-view`,className)
		const actions = [{
			name:'播放',
			key:'play'
		},{
			name:'添加到歌单',
			key:'add'
		},{
			name:'分享',
			key:'share'
		},{
			name:'下载',
			key:'download'
		},{
			name:'删除',
			key:'delete'
		}]
		return (
			<div className={classes}>
				{!lists.length && (
					<Icon style={{display:'block',margin:'10px auto',fontSize:22,color:'silver'}} type="loading" />
				)}
				<Header 
					fixed={true}
					logo={(
						<img src="http://m.kugou.com/v3/static/images/index/logo.png" alt="logo"/>
					)} 
					extra={(
						<NavLink to="/search">
							<Icon style={{fontSize:18}} type="search" />
						</NavLink>
						)}
				/>
				<div className={`${classPrefixer}-banner`}>
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
					{banner && ( <img src={banner} alt="banner"/>)}
					{footText && (
						<Header
							logo={(
								<span>更新时间：{footText}</span>
							)}
							style={{position:'absolute',bottom:0,top:'none'}}
						 	className="banner-foot"
						 />
					)}
				</div>
				<Songslist 
					onClick={info => console.log(info)} 
					songs={this.getSongs()} 
					actions={actions}
					actionClick={row => console.log(row)}
					actionComponent={ActionSheet} 
				/>
			</div>
		)
	}
}

SongsView.propTypes = {
	lists:PropTypes.array.isRequired,
	title:PropTypes.string,
	footText:PropTypes.string,
	banner:PropTypes.string,
	className:PropTypes.string
}

export default withRouter(SongsView)