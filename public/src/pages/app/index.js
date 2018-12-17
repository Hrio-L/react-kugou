import React,{Component} from 'react'
import {connect} from 'react-redux'
import {NavLink,Redirect,Route} from 'react-router-dom'
import Icon from '../../components/icon'
import Authorized from '../../components/authorized'
import Menu from '../../components/menu'
import Player from '../../components/player'
import Swiper from '../../components/swiper'
import CacheComponent from '../../components/cache-component'
import Scrolltop from '../../components/scrolltop'
import Header from '../../components/header'
import './index.less'


const mapStateToProps = ({menus}) => ({menus})
const mapDispatchToProps = dispatch => ({
	menuChange:path => {
		dispatch({
			type:'UPDATE_MENU_SELECTED',
			selected:path
		})
	}
})

@connect(mapStateToProps,mapDispatchToProps)
class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			isTop:''
		}
	}
	componentDidMount = () => {
		const {location} = this.props
		this.selectedChange(location.pathname)
	}

	selectedChange = path => {
		const {menus:{selected},menuChange} = this.props
		if(!selected.includes(path)){
			menuChange(path)
		}
	}
	handleResize = () => {
		var w = document.documentElement.getBoundingClientRect().width
        document.documentElement.style.fontSize = w / 25 + 'px'
	}
	renderMenu = () => {
		const {menus:{data},location} = this.props
		return data.map((d,i) => (
			<NavLink onClick={this.selectedChange.bind(this,d.path)} className="menu-link" activeClassName="menu-link-active" to={d.path} key={d.key}>
				{d.name}
			</NavLink>
		))
	}
	renderContent = () => {
		const {routes,menus:{selected}} = this.props
		const {isTop} = this.state
		return (
			routes.map((d,i) => {
				return (
					<Scrolltop timeout={300} isTop={isTop !== d.path} style={{paddingTop:91,paddingBottom:70}} key={d.path}>
						<CacheComponent render={selected.includes(d.path)} component={d.component} />
					</Scrolltop>
				)
			})
		)
	}
	onChange = key => {
		const {pathname} = this.props.location
		if(pathname !== key){
			this.setState({
				isTop:key
			})
			this.selectedChange(key)
			this.props.history.push(key)
		}
	}
	render(){
		const {location} = this.props
		return(
			<div className="app">
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
				<Menu fixed={true}  style={{top:'3.125rem'}}>
					{this.renderMenu()}
				</Menu>
				<Swiper  timeout={300} onChange={this.onChange} defaultSelected={location.pathname}>
					{this.renderContent()}
				</Swiper>
				<Player />
			</div>
		)
	}
}


export default App