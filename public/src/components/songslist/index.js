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
	const renderItem = list => {
		const Action = props.actionComponent
		return list.map((d,i) => (
			<li onClick={handleClick.bind(null,d)} key={i} className="songs-item">
				<div className="detail">
					<h5 className="songs-name">{d.name}</h5>
					<span className="songs-author">{d.author}</span>
				</div>
				{
					Action
						? 
							<div className="actions">
								<Action onClick={props.actionClick} info={{name:d.name,desc:d.author,id:d.id}} actions={props.actions} >
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
	onClick:PropTypes.func
}




export default Songslist