import React,{Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './index.less'

class Silder extends Component{
	static defaultProps = {
		classPrefixer:'silder',
		used:0,
		step:2,
		style:{
			width:'100%',
			height:3
		},
		dotSize:12,
		onChange:used => {
			console.log('used :',used)
		}
	}
	constructor(props){
		super(props)
		this.state = {
			used:props.used,
			startX:0,
			silderWidth:0,
			minUsed:0,
			maxUsed:100
		}
	}
	componentDidMount = () => {
		this.initSilder()
		window.addEventListener('resize',this.initSilder,false)
		document.addEventListener('keydown',this.handleKeyDown,false)
	}
	componentWillUnmount = () => {
		window.removeEventListener('resize',this.initSilder,false)
		document.removeEventListener('keydown',this.handleKeyDown,false)
	}
	initSilder = () => {
		const {silder} = this.refs
		const {offsetWidth:silderWidth} = silder
		this.setState({
			silderWidth
		})
	}
	handleChange = used => {
		const {onChange} = this.props
		const {minUsed,maxUsed} = this.state

		switch(used){
			case minUsed:
				onChange(0)
			break
			case maxUsed:
				onChange(100)
			break
			default:
				onChange(used)
		}
	}
	setUsed = used => {
		const {minUsed,maxUsed} = this.state
		let newUsed = used
		if(used <= minUsed){
			newUsed = minUsed
		}else if(used >= maxUsed){
			newUsed = maxUsed
		}
		this.setState({
			used:newUsed
		})
	}
	handleTouch = (ev,target) => {
		const {touches} = ev
		const {clientX} = touches[0]
		const {silderWidth} = this.state
		const rect = target.getBoundingClientRect()
		const startX = clientX - rect.left
		const used = parseFloat((startX / silderWidth * 100).toFixed(2))
		this.setUsed(used)
	}
	handleTouchStart = ev => {
		this.handleTouch(ev,ev.target)
	}
	handleTouchMove = ev => {
		this.handleTouch(ev,ev.target)
	}
	handleTouchEnd = ev => {
		const {used} = this.state
		this.handleChange(used)
	}
	dotTouchStart = ev => {
		ev.stopPropagation()
	}
	dotTouchMove = ev => {
		ev.stopPropagation()
		const {silder} = this.refs
		this.handleTouch(ev,silder)
	}
	handleKeyDown = ev => {
		const {keyCode} = ev
		const {used,minUsed,maxUsed} = this.state
		const {step,onChange} = this.props
		const leftCode = 37
		const rightCode = 39
		let newUsed = 0
		switch(keyCode){
			case leftCode:
				if((used > minUsed) && ((used - step) > minUsed)){
					newUsed = used - step
				}else{
					newUsed = minUsed
				}
				this.setUsed(newUsed)
				this.handleChange(newUsed)
			break
			case rightCode:
				if((used < maxUsed) && ((used + step) < maxUsed)){
					newUsed = used + step
				}else{
					newUsed = maxUsed
				}
				this.setUsed(newUsed)
				this.handleChange(newUsed)
			break
		}
	}

	render(){
		const {used} = this.state
		const {style,className,classPrefixer,dotSize} = this.props
		const events = {
			onTouchStart:this.handleTouchStart,
			onTouchMove:this.handleTouchMove,
			onTouchEnd:this.handleTouchEnd
		}
		const classes = classNames(classPrefixer,className)
		return(
			<div  {...events}  style={style} ref="silder" className={classes}>
				<span style={{width:`${used}%`}} className={`${classPrefixer}-used`}>
					<span onTouchStart={this.dotTouchStart} onTouchMove={this.dotTouchMove} style={{width:dotSize,height:dotSize,top:(style.height - dotSize) /2}} className={`${classPrefixer}-dot`}></span>
				</span>
			</div>
		)
	}
}

Silder.propTypes = {
	used:PropTypes.number,
	step:PropTypes.number,
	onChange:PropTypes.func,
	className:PropTypes.string,
	dotWidth:PropTypes.number,
	style:PropTypes.object
}

export default Silder