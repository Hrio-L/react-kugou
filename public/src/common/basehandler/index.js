import React,{Component} from 'react'
import {connect} from 'react-redux'

const BaseHandler = Comp => {
	const mapDispatchToProps = dispatch => ({
		getSongDetail:payload => {
			dispatch({
				type:'GET_SONG_DETAIL_REQUEST',
				payload
			})
		}
	})

	@connect(({rootState:{playing}})=>({playing}),mapDispatchToProps)
	class NewComponent extends Component{
		onSongClick = info => {
			const {getSongDetail,playing:{id}} = this.props
			if(id !== info.id){
				getSongDetail({
					hash:info.id
				})
			}
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