import React,{Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Icon from '../icon'
import './index.less'

class Scroll extends Component{
	static defaultProps = {
		classPrefixer:'scroll',
		isTop:false,
		onBottom:() => {
		},
		timeout:0,
		loading:false
	}
	constructor(props){
		super(props)
		window.addEventListener('resize',this.handleResize,false)
	}
	state = {
		style:{
			height:window.innerHeight
		}
	}
	componentWillReceiveProps =  nextProps => {
		const {scroll} = this.refs
		const {isTop,loading,timeout} = this.props
		if(nextProps.isTop !== isTop){
			if(nextProps.isTop){
				this.timer = setTimeout(() => {
					scroll.scrollTo(0,0)
				},timeout)
			}
		}
	}
	componentDidMount = () => {
		const {scroll} = this.refs
		const {getRef} = this.props
		getRef && getRef(scroll)
		scroll.addEventListener('scroll',this.handleScroll,false)
	}
	componentWillUnmount = () => {
		const {scroll} = this.refs
		window.removeEventListener('resize',this.handleResize,false)
		scroll.removeEventListener('scroll',this.handleScroll,false)
		clearTimeout(this.timer)
	}
	handleScroll = ev => {
		const {onBottom,loading} = this.props
		const {scrollTop,scrollHeight,clientHeight} = ev.target
		const isBottom = scrollHeight - clientHeight
		if(scrollTop >= isBottom){
			if(!loading){
				onBottom()
			}
		}
	}
	handleResize = () => {
		this.setState({
			style:{
				height:window.innerHeight
			}
		})
	}
	render(){
		const {style,classPrefixer,className,children,loading} = this.props
		const classes = classNames(classPrefixer,className)
		return (
			<div ref="scroll" style={{...this.state.style,...style}}  className={classes}>
				{children}
				{loading && (
					<Icon style={{display:'block',margin:'10px auto',fontSize:22,color:'silver'}} type="loading" />
				)}
			</div>
		)
	}
}

Scroll.propTypes = {
	className:PropTypes.string,
	style:PropTypes.object,
	isTop:PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.func
	]),
	onBottom:PropTypes.func,
	timeout:PropTypes.number,
	loading:PropTypes.bool,
	getRef:PropTypes.func
}

export default Scroll