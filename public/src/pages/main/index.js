import React,{Component} from 'react'
import {connect} from 'react-redux'
import {HashRouter as Router,NavLink,Redirect,Route} from 'react-router-dom'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import Icon from '../../components/icon'
import Authorized from '../../components/authorized'
import Menu from '../../components/menu'
import Player from '../../components/player'
import Swiper from '../../components/swiper'
import CacheComponent from '../../components/cache-component'
import Header from '../../components/header'


const mapStateToProps = ({menus}) => ({menus})
const mapDispatchToProps = dispatch => ({
	menuChange:path => {
		dispatch({
			type:'UPDATE_MENU_SELECTED',
			selected:path
		})
	}
})

@immutableRenderDecorator
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
					<CacheComponent key={d.path} state={{isTop:isTop !== d.path}} render={selected.includes(d.path)} component={d.component} />
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
			<div className="main">
				<Header 
					fixed={true}
					logo={(
						<img src="http://m.kugou.com/v3/static/images/index/logo.png" alt="logo"/>
					)} 
					extra={(
						<NavLink to="/search">
							<Icon style={{fontSize:18,color:'white'}} type="search" />
						</NavLink>
						)}
				/>
				<Menu fixed={true}  style={{top:'3.125rem'}}>
					{this.renderMenu()}
				</Menu>
				<Swiper timeout={200} overflowScale={.25} onChange={this.onChange} defaultSelected={location.pathname}>
						{this.renderContent()}
				</Swiper>
			</div>
		)
	}
}


export default App