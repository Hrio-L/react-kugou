import React,{Component} from 'react'
import {connect} from 'react-redux'

const BaseHandler = Comp => {
	const mapDispatchToProps = dispatch => ({
		getSongDetail:hash => {
			dispatch({
				type:'GET_SONG_DETAIL_REQUEST',
				hash
			})
		}
	})

	@connect(()=>({}),mapDispatchToProps)
	class NewComponent extends Component{
		onSongClick = info => {
			const {getSongDetail} = this.props
			getSongDetail(info.id)
		}
		render(){
			const {getSongDetail,...rest} = this.props
			return (
				<Comp onSongClick={this.onSongClick} {...rest} />
			)
		}
	}

	return NewComponent
}

export default BaseHandler