import React,{PureComponent} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './index.less'

class Lyrics extends PureComponent{
	static defaultProps = {
		classPrefixer:'lyrics',
		currentTime:0,
		lyrics:'',
	}
	state = {
		lyricsData:[],
		viewHeight:0,
		itemHeight:0,
		current:0,
		translateY:0,
		prevCurrent:0
	}
	componentDidMount = () => {
		const {lyrics} = this.refs
		const {offsetHeight} = lyrics
		this.setState({
			viewHeight:offsetHeight,
			translateY:offsetHeight / 2
		})
	}
	componentWillReceiveProps = nextProps => {
		const {currentTime,lyrics} = this.props
		const {translateY,itemHeight,current,lyricsData,viewHeight,prevCurrent} = this.state
		if(current * itemHeight > viewHeight / 2 ){
				if(prevCurrent !== current){
					this.setState({
						translateY:-current * itemHeight + viewHeight / 2,
						prevCurrent:current
					})
				}
		}

		if(lyricsData.length && lyrics == nextProps.lyrics){
			lyricsData.forEach((d,i) => {
				if(currentTime >= d.time){
					this.setState({
						current:i
					})
					return
				}
			})
		}else{
			this.setState({
				lyricsData:this.getLyricsData(nextProps)
			})
		}
	}
	translateTime = timeStr => {
		const minute = parseFloat(timeStr.split(':')[0]) * 60
		const second = parseFloat(timeStr.split(':')[1])
		return minute + second
	}
	getLyricsData = props => {
		const {lyrics} = props
		const lyricsData = lyrics.trim().split(/\r\n/g)
		
		if(lyricsData.length > 1){
			const matchTimeReg =/[^]+]/g
			return lyricsData.map((d,i) => {
				const lyricsTime = d.match(matchTimeReg)[0]
				const lyricsStr =d.split(lyricsTime)[1]
				return ({
					time:this.translateTime(lyricsTime.replace(/\[|\]/g,'')),
					text:lyricsStr
				})
			})
		}
		return []
	}
	getItemHeight = ref => {
		const {itemHeight} = this.state
		if(!itemHeight){
			this.setState({
				itemHeight:ref.clientHeight
			})
		}
	}
	renderLyrics = () => {
		const {classPrefixer} = this.props
		const {current,lyricsData} = this.state
		return lyricsData.map((d,i) => (
			<li ref={this.getItemHeight} className={`${classPrefixer}-item ${i === current ? 'current' : ''}`} data-time={d.time} key={i}>{d.text}</li>
		))
	}
	render(){
		const {classPrefixer,className,style} = this.props
		const {viewHeight,translateY} = this.state
		const classes = classNames(classPrefixer,className)
		return (
			<div style={{...style}} ref="lyrics" className={classes}>
				<ul style={{transform:`translateY(${translateY}px)`}} className={`${classPrefixer}-list`}>
					{this.renderLyrics()}
				</ul>
			</div>
		)
	}
}

Lyrics.propTypes = {
	lyrics:PropTypes.string.isRequired,
	currentTime:PropTypes.number.isRequired,
	style:PropTypes.object,
	className:PropTypes.string
}

export default Lyrics