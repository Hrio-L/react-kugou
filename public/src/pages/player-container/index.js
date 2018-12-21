import React,{Component} from 'react'
import Player from '../../components/player'
import {connect} from 'react-redux'
import BaseHandler from '../../common/basehandler'

const mapStateToProps = ({rootState:{playing}}) => ({playing})

@connect(mapStateToProps)
@BaseHandler
class PlayerContainer extends Component{
	render(){
		const {playing,onSongClick} = this.props
		return (
			<div className="play-container">
				<Player 
					{...playing}
				/>
			</div>
		)
	}
}

export default PlayerContainer