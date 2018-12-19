import React,{Component} from 'react'
import {connect} from 'react-redux'
import Icon from '../../../components/icon'
import SongsView from '../../../components/songs-view'

const mapStateToProps = ({singerClasslist:{singer:{lists,singerName,banner,intro}}}) => ({lists,singerName,banner,intro})
const mapDispatchToProps = dispatch => ({
	getSongsRequest:id => {
		dispatch({
			type:'GET_SINGER_SONGS_LIST_REQUEST',
			id
		})
	},
	initSinger:() => {
		dispatch({
			type:'INIT_SINGER',
			list:[],
			singerName:'',
			banner:''
		})
	}
})

@connect(mapStateToProps,mapDispatchToProps)
class Songs extends Component{
	componentDidMount = () => {
		const {match:{params:{id}},getSongsRequest} = this.props
		if(id){
			getSongsRequest(id)
		}
	}
	componentWillUnmount = () => {
		const {initSinger} = this.props
		initSinger()
	}
	render(){
		const {lists,singerName,banner,intro} = this.props
		return (
			<div className="songs">
				{!lists.length && (
					<Icon style={{display:'block',margin:'10px auto',fontSize:22,color:'silver'}} type="loading" />
				)}
				<SongsView
					lists={lists}
					title={singerName}
					banner={banner}
					collapse={{
						header:singerName,
						content:intro
					}}
				/>
			</div>
		)
	}
}

export default Songs