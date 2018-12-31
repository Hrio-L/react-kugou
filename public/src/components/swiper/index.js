import React,{PureComponent,Children} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './index.less'

class Swiper extends PureComponent {
	static defaultProps = {
		classPrefixer:'swiper',
		loop:false,
		timeout:200,
		autoplay:false,
		duration:3,
		defaultSelected:'',
		overflowScale:0.3,
		dot:false,
		onChange:key => {}
	}
	constructor(props){
		super(props)
		const {style} = props
	
		this.state = {
			selected:props.defaultSelected,
			swiperCount:0,
			swiperWidth:0,
			prevTranslate:0,
			translate:0,
			transition:``,
			startX:0,
			moveX:0,
			touch:false,
			loop:props.autoplay ? true : props.loop,
			move:false,
			horizontalDirection:0,
			direction:''
		}
		window.addEventListener('resize',this.resetWidth,false)
	}
	componentWillReceiveProps = nextProps => {
		const {defaultSelected} = this.props
		if(nextProps.defaultSelected !== defaultSelected){
			const {swiper} = this.refs
			const {move} = this.state
			const index = this.getSelectedIndex(nextProps.defaultSelected)
			this.setState({
				translate:-index * swiper.clientWidth,
				transition: move ? `transform ${nextProps.timeout}ms ` : ''
			})
		}
	}
	componentDidMount = () => {
		this.initSwiper(this.props)
	}
	componentWillUnmount = () => {
		this.handleUnMount()
	}
	handleUnMount = () => {
		clearInterval(this.timer)
		clearTimeout(this.translateTimer)
		clearTimeout(this.transitionTimer)
		clearTimeout(this.changeTimer)
		window.removeEventListener('resize',this.resetWidth,false)
	}
	initSwiper = props => {
		const {swiper} = this.refs
		const {children} = props
		const {loop} = this.state
		const index = this.getSelectedIndex(props.defaultSelected)
		const swiperWidth = swiper.clientWidth > window.innerWidth ? window.innerWidth : swiper.clientWidth
		this.setState({
			swiperWidth,
			translate:-index * swiperWidth,
			swiperCount:loop ? children.length + 2 : children.length,
			transition:''
		})
		this.autoplayTimer()
	}
	resetWidth = (ev) => {
		ev.stopPropagation()
		ev.preventDefault()
		const {swiper} = this.refs
		const {defaultSelected} = this.props
		const index = this.getSelectedIndex(defaultSelected)
		const selected = this.getSelected(index)
		this.setState({
			swiperWidth:swiper.clientWidth,
			translate:-index * swiper.clientWidth,
			selected:selected,
			transition:''
		})
	}
	autoplayTimer = () => {
		clearInterval(this.timer)
		const {duration,autoplay,timeout,onChange} = this.props
		if(autoplay){
			this.timer = setInterval(() => {
				const {translate,swiperCount,selected} = this.state
				const index = this.getSelectedIndex(selected) 
				const count = swiperCount - 1
				let newIndex = index + 1
				let newTranslate = translate
				let newSelected = selected
				let newTransition = `transform ${timeout}ms `

				if(newIndex <= count){
					if(newIndex == count){
						this.translateTimer = setTimeout(() => {
							newIndex = 1
							newTranslate = this.getTranslate(newIndex)
							newSelected = this.getSelected(newIndex)
							newTransition = ''
							this.setState({
								selected:newSelected,
								translate:newTranslate,
								transition:newTransition
							})
							onChange(newSelected)
						},timeout)
					}else{
						newSelected = this.getSelected(newIndex)
						onChange(newSelected)
					}
					newTranslate = this.getTranslate(newIndex)
				}
				this.setState({
					selected:newSelected,
					translate:newTranslate,
					transition:newTransition
				})
			},duration*1000)
		}
	}
	getSelectedIndex = selected => {
		const {children} = this.props
		const {loop} = this.state
		for(let i = 0;i<children.length;i++){
			if(children[i].key === selected){
				return loop ? i + 1 :i
			}
		}
		return loop ? 1 : 0
	}
	sliceFloat = num => {
		return parseFloat(`0.${String.prototype.split.call(num,'.')[1]}`)
	}
	sethorizontalDirection = moveX => {
		const {moveX:prevMoveX} = this.state
		const moveDis = moveX - prevMoveX
		if(moveDis > 0.5){
			this.setState({
				horizontalDirection:1
			})
		}else if(moveDis <  0.5){
			this.setState({
				horizontalDirection:-1
			})
		}else{
			this.setState({
				horizontalDirection:0
			})
		}
	}
	onTouchStart = ev => {
		const {translate,swiperWidth,swiperCount,loop} = this.state
		const {children,autoplay} = this.props
		const {clientX,clientY} = ev.touches[0]
		const count = swiperCount - 1
		const first = 0
		const last = count * swiperWidth
		let newTranslate = translate
		
		if(autoplay){
			clearInterval(this.timer)
		}

		if(loop){
			switch(Math.abs(translate)){
				case first:
					newTranslate = -(count - 1)  * swiperWidth
				break
				case last:
					newTranslate = -1 * swiperWidth
				break
			}
		}
		this.setState({
			startX:clientX,
			startY:clientY,
			prevTranslate:clientX - newTranslate,
			touch:true
		})
		clearTimeout(this.changeTimer)
	}
	onTouchMove = ev => {
		ev.stopPropagation()
		const {startX,startY,prevTranslate,moveX,moveY,move,swiperWidth,swiperCount,loop,direction} = this.state
		const {clientX,clientY} = ev.touches[0]
		
		const vertical = Math.abs(clientY - startY)
		const horizontal = Math.abs(clientX - startX)
		const isHorizontal = horizontal > 10

		const newDirection = direction || (horizontal > vertical ? 'horizontal':'vertical')
		const min = 0
		const max = swiperWidth * (swiperCount - 1)
		let newTranslate = clientX - prevTranslate


		if(!loop){
			if(newTranslate > min){
				newTranslate = 0
			}else if(newTranslate < -max){
				newTranslate = -max
			}
		}

		switch(direction){
			case 'horizontal':
				this.stopScroll()
				this.sethorizontalDirection(clientX)
				this.setState({
					translate:newTranslate,
					transition:'',
				})
			break
			case 'vertical':
				
			break
		}

		this.setState({
			moveX:clientX,
			move:true,
			moveY:clientY,
			direction:newDirection
		})
	}
	emitChange = (newSelected) => {
		const {onChange,timeout} = this.props
		clearTimeout(this.changeTimer)
		this.changeTimer = setTimeout(() => {
			onChange(newSelected)
		},timeout)
	}
	onTouchEnd =  ev => {
		const {timeout,children,autoplay,overflowScale} = this.props
		const {translate,swiperWidth,move,horizontalDirection,selected,loop,direction} = this.state
		const translateScale = translate / swiperWidth
		const moveScale = parseFloat(this.sliceFloat(translateScale))
		const index = loop ? Math.abs(Math.floor(translateScale)) - 1 : Math.abs(Math.floor(translateScale)) 

		let newSelected = selected 
		let newTranslate = translate
		
		if(autoplay){
			this.autoplayTimer()
		}
		if(move && direction=='horizontal'){
			this.startScroll()
			const moveLeft = -1
			const moveRight = 1
			switch(horizontalDirection){
				case moveLeft:
					if(moveScale > overflowScale){
						newTranslate = this.getTranslate(-Math.floor(translateScale))
						if(index < children.length){
							newSelected = this.getSelected(index + 1)
						}else{
							newSelected = this.getSelected(1)
						}
						this.emitChange(newSelected)
					}else{
						newTranslate = this.getTranslate(-Math.ceil(translateScale))
						if(moveScale < 0.01){
							this.emitChange(newSelected)
						}
					}
				break
				case moveRight:
					if(moveScale < 1 - overflowScale){
						newTranslate = this.getTranslate(-Math.ceil(translateScale))
						if(index > 0){
							newSelected = this.getSelected(index)
							
						}else{
							newSelected = this.getSelected(children.length)
						}

						if(!loop){
							if(index == 0){
								newSelected = this.getSelected(1)
							}
						}else{
							if(index == 0){
								this.transitionTimer = setTimeout(() => {
									this.setState({
										translate:this.getTranslate(children.length),
										transition:''
									})
								},timeout)
							}
						}
						this.emitChange(newSelected)
					}else{
						newTranslate = this.getTranslate(-Math.floor(translateScale))
						if(moveScale < 0.01){
							this.emitChange(newSelected)
						}
					}
				break
			}
			this.setState({
				selected:newSelected,
				translate:newTranslate,
				horizontalDirection:0,
			})
		}
		this.setState({
			touch:false,
			transition:`transform ${timeout}ms `,
			move:false,
			direction:''
		})
	}
	getTranslate = index => {
		const {swiperWidth} = this.state
		return -index * swiperWidth
	}
	getSelected = (index) => {
		const {children} = this.props
		return children[index - 1] && children[index - 1].key
	}
	stopScroll = () => {
		document.querySelectorAll('.scroll').forEach(d => {
			d.style.overflow= 'hidden'
		})
		document.documentElement.style.overflow = 'hidden'
	}
	startScroll = () => {
		document.documentElement.style.overflow = 'auto'
		document.querySelectorAll('.scroll').forEach(d => {
			d.style.overflow = 'auto'
		})
	}
	renderItem = () => {
		const {children} = this.props
		const {swiperWidth,swiperCount} = this.state
		const {loop} = this.state
		if(children.length){
			const middle = children.map((d,i) => (
				<li style={{width:100/swiperCount+'%'}} className="swiper-item" key={i}>
					{d}
				</li>
			))
			if(loop){
				return [
					<li style={{width:100/swiperCount+'%'}} className="swiper-item" key="last">{children[children.length - 1]}</li>,
					...middle,
					<li style={{width:100/swiperCount+'%'}} className="swiper-item" key="first">{children[0]}</li>
				]
			}
			return middle
		}
		return children
	}
	renderDot = () => {
		const {children,dot} = this.props
		const {selected} = this.state
		if(children.length && dot){
			return (
				<div className="swiper-dots">
					{
						Children.map(children,((d,i) => (
							<span className={`swiper-dot${d.key === selected ? ' swiper-dot-active' : ''}`} key={i}></span>
						)))
					}
				</div>
			)
		}else{
			return null
		}
	}
	initWrapWidth = () => {
		const {swiperCount,swiperWidth} = this.state
		return swiperCount * 100 + '%'
	}
	render(){
		const {children,style,className,classPrefixer} = this.props
		const {translate,transition} = this.state
		const events = {
			onTouchStart:this.onTouchStart,
			onTouchMove:this.onTouchMove,
			onTouchEnd:this.onTouchEnd
		}
		const classes = classNames(classPrefixer,className)
		return (
			<div ref="swiper" {...events} style={style} className={classes}>
				<ul 
					style={{width:this.initWrapWidth(),transform:`translate(${translate}px)`,transition}} 
					className="swiper-wrap"
				>
					{this.renderItem()}
				</ul>
				{this.renderDot()}
			</div>
		)
	}
}

Swiper.propTypes = {
	loop:PropTypes.bool,
	timeout:PropTypes.number,
	autoplay:PropTypes.bool,
	duration:PropTypes.number,
	defaultSelected:PropTypes.string,
	overflowScale:PropTypes.number,
	dot:PropTypes.bool,
	className:PropTypes.string,
	style:PropTypes.object,
	onChange:PropTypes.func,
	children:PropTypes.arrayOf(
		PropTypes.shape({
			key:PropTypes.string.isRequired
		}),
		PropTypes.oneOfType([
			PropTypes.node,
			PropTypes.element
		])
	).isRequired
}

export default Swiper