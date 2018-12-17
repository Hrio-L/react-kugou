import React,{Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './index.less'

class Scrolltop extends Component{
	static defaultProps = {
		classPrefixer:'scrolltop',
		isTop:false,
		timeout:0
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
		if(nextProps.isTop){
			setTimeout(() => {
				this.refs.scrolltop.scrollTo(0,0)
			},nextProps.timeout)
		}
	}
	componentWillUnmount = () => {
		window.removeEventListener('resize',this.handleResize,false)
	}

	handleResize = () => {
		this.setState({
			style:{
				height:window.innerHeight
			}
		})
	}
	render(){
		const {style,classPrefixer,className,children} = this.props
		const classes = classNames(classPrefixer,className)
		return (
			<div ref="scrolltop" style={{...style,...this.state.style}}  className={classes}>
				{children}
			</div>
		)
	}
}

Scrolltop.propTypes = {
	className:PropTypes.string,
	style:PropTypes.object,
	isTop:PropTypes.bool,
	timeout:PropTypes.number
}

export default Scrolltop