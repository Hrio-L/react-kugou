import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import SongsView from '../../../components/songs-view'

const mapStateToProps = ({toplist:{rank:{lists,banner,rankname,time}}}) => ({lists,banner,rankname,time})
const mapDispatchToProps = dispatch => ({
	getListRequest:id => {
		dispatch({
			type:'GET_RANK_LIST_REQUEST',
			id
		})
	},
	initRank:() => {
		dispatch({
			type:'INIT_RANK',
			banner:'',
			rankname:'',
			time:'',
			list:[]
		})
	}
})

@connect(mapStateToProps,mapDispatchToProps)
class Rank extends Component{
	componentDidMount = () => {
		const {lists,getListRequest,match:{params:{id}}} = this.props
		if(id){
			getListRequest(id)
		}
	}
	componentWillUnmount = () => {
		const {initRank} = this.props
		initRank()
	}
	render(){
		const {lists,rankname,time,banner} = this.props
		return(
			<div className="rank">
				<SongsView
					banner={banner}
					lists={lists}
					title={rankname}
					footText={time}
				/>
			</div>
		)
	}
}

export default Rank