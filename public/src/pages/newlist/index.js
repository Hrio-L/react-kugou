import React,{Component} from 'react'
import {connect} from 'react-redux'
import Songslist from '../../components/songslist'
import AcationSheet from '../../components/action-sheet'
import Swiper from '../../components/swiper'
import './index.less'

const mapStateToProps = ({newlist:{songs}}) => ({songs})
const mapDispatchToProps = dispatch => ({
	getListRequest:() => {
		dispatch({
			type:'GET_NEWLIST_REQUEST'
		})
	}
})

@connect(mapStateToProps,mapDispatchToProps)
class Newlist extends Component{
	componentDidMount = () => {
		const {getListRequest,songs} = this.props

		if(!songs.length){
			getListRequest()
		}
	}
	getSongs = () => {
		const {songs} = this.props
		return songs.map((d,i) => {
			const info = d.filename.trim().split('-')
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
	render(){
		
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
		return(
			<div className="newlist">
				<Swiper defaultSelected="one" dot={true} autoplay={true}>
					<img key="one" src="http://imge.kugou.com/mobilebanner/20181118/20181118235002945118.jpg" alt=""/>
					<img key="two" src="http://imge.kugou.com/mobilebanner/20181115/20181115234723303157.jpg" alt=""/>
					<img key="three" src="http://imge.kugou.com/mobilebanner/20181116/20181116195523184006.jpg" alt=""/>
				</Swiper>
				<Songslist 
					onClick={info => console.log(info)} 
					songs={this.getSongs()} 
					actions={actions}
					actionClick={row => console.log(row)}
					actionComponent={AcationSheet} 
				/>
			</div>
		)
	}
}

export default Newlist