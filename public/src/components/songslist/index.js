import React,{Component} from 'react'
import Icon from '../icon'
import PropTypes from 'prop-types'

import './index.less'

const Songslist = props => {
	const handleClick = row => {
		if(props.onClick){
			props.onClick(row)
		}
	}
	const renderItem = lists => {
		const Action = props.actionComponent
		if(!lists.length){
			return (
				<Icon style={{display:'block',margin:'10px auto',fontSize:22,color:'silver'}} type="loading" />
			)
		}
		return lists.map((d,i) => (
			<li onClick={handleClick.bind(null,d)} key={i} className="songs-item">
				<div className="detail">
					<h5 className="songs-name">{d.name}</h5>
					<span className="songs-author">{d.author}</span>
				</div>
				{
					Action
						? 
							<div className="actions">
								<Action onClick={props.actionClick} info={d} actions={props.actions} >
									<Icon type="ellipsis" />
								</Action>
							</div>
						:
							null
				}
			</li>
		))
	}
	return (
		<div className="songslist">
			<ul className="songs-wrap">
				{renderItem(props.songs)}
			</ul>
		</div>
	)
}
Songslist.propTypes = {
	songs:PropTypes.arrayOf(
		PropTypes.shape({
			name:PropTypes.string.isRequired,
			id:PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.number
			]),
			author:PropTypes.string.isRequired
		})
	).isRequired,
	actionComponent:PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.node
	]),
	onClick:PropTypes.func,
	actionClick:PropTypes.func
}




export default Songslist