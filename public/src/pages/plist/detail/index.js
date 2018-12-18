import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import SongsView from '../../../components/songs-view'

const mapStateToProps = ({plist:{detail:{lists,banner,specialname}}}) => ({lists,banner,specialname})
const mapDispatchToProps = dispatch => ({
	getDetailRequest:id => {
		dispatch({
			type:'GET_PLIST_DETAIL_REQUEST',
			id
		})
	},
	initDetail:() => {
		dispatch({
			type:'INIT_PLIST_DETAIL',
			list:[],
			specialname:'',
			banner:''
		})
	}
})

@connect(mapStateToProps,mapDispatchToProps)
class PlistDetail extends Component{
	componentDidMount = () => {
		const {getDetailRequest,match:{params:{id}}} = this.props
		if(id){
			getDetailRequest(id)
		}
	}
	componentWillUnmount = () => {
		const {initDetail} = this.props
		initDetail()
	}
	render(){
		const {lists,specialname,banner} = this.props
		return(
			<div className="plist-detail">
				<SongsView
					banner={banner}
					lists={lists}
					title={specialname}
				/>
			</div>
		)
	}
}

export default PlistDetail