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
			width:'100%'
		},
		onChange:used => {
			console.log('used :',used)
		}
	}
	constructor(props){
		super(props)
		this.state = {
			used:props.used,
			silderWidth:0,
			dotWidth:0,
			minUsed:0,
			maxUsed:100
		}
	}
	componentDidMount = () => {
		this.initSilder()
		document.addEventListener('keydown',this.handleKeyDown,{
			passive:false
		})
	}
	componentWillUnmount = () => {
		document.removeListener('keydown',this.handleKeyDown,{
			passive:false
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
	initSilder = () => {
		const {silder,dot} = this.refs
		const {offsetWidth:silderWidth} = silder
		const {offsetWidth:dotWidth} = dot
		this.setState({
			minUsed:parseFloat((dotWidth / silderWidth * 100).toFixed(2)),
			used:parseFloat((dotWidth / silderWidth * 100).toFixed(2)) + this.props.used,
			silderWidth:silderWidth - dotWidth,
			dotWidth
		})
	}
	handleTouchStart = ev => {
	}
	handleTouchMove = ev => {
		const {touches} = ev
		const {clientX} = touches[0]
		const {minUsed,silderWidth,maxUsed,dotWidth} = this.state
		const dis = clientX + dotWidth / 2
	
		const used = parseFloat((dis / silderWidth * 100).toFixed(2))

		if((used >= minUsed)&&(used<=maxUsed)){
			this.setState({
				used
			})
		}else{
			if(used > 0){
				this.setState({
					used:maxUsed
				})
			}else{
				this.setState({
					used:minUsed
				})
			}
		}
	}
	handleTouchEnd = ev => {
		const {used} = this.state
		this.handleChange(used)
	}
	handleKeyDown = ev => {
		const {keyCode} = ev
		const {used,minUsed,maxUsed} = this.state
		const {step,onChange} = this.props
		const left = 37
		const right = 39
		let newUsed = 0
		switch(keyCode){
			case left:
				if((used > minUsed) && ((used - step) > minUsed)){
					newUsed = used - step
				}else{
					newUsed = minUsed
				}
				this.setState({
					used:newUsed
				})
				this.handleChange(newUsed)
			break
			case right:
				if((used < maxUsed) && ((used + step) < maxUsed)){
					newUsed = used + step
				}else{
					newUsed = maxUsed
				}
				this.setState({
					used:newUsed
				})
				this.handleChange(newUsed)
			break
		}
	}
	render(){
		const {used} = this.state
		const {style,className,classPrefixer} = this.props
		const events = {
			onTouchStart:this.handleTouchStart,
			onTouchMove:this.handleTouchMove,
			onTouchEnd:this.handleTouchEnd
		}
		const classes = classNames(classPrefixer,className)
		return(
			<div style={style} ref="silder" className={classes}>
				<span style={{width:`${used}%`}} className={`${classPrefixer}-used`}>
					<span ref="dot" {...events} className={`${classPrefixer}-dot`}></span>
				</span>
			</div>
		)
	}
}

Silder.propTypes = {
	used:PropTypes.number,
	step:PropTypes.number,
	onChange:PropTypes.func,
	className:PropTypes.string
}

export default Silder