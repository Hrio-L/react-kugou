import React,{Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './index.less'

const createComponent = name => props => {
	const {classPrefixer,className,type,...rest} = props
	const classes = classNames(classPrefixer,`${classPrefixer}-${name}`,className)
	return (
		<i  {...rest} className={classes}></i>
	)
}

const Loading = createComponent('loading')
const Ellipsis = createComponent('ellipsis')
const Search = createComponent('search')
const Play = createComponent('play')
const Pause = createComponent('pause')
const Next = createComponent('next')
const Prev = createComponent('prev')
const ArrowLeft = createComponent('arrow-left')
const ArrowRight = createComponent('arrow-right')
const ArrowDown = createComponent('arrow-down')
const ArrowUp = createComponent('arrow-up')
const Clock = createComponent('clock')
const Close = createComponent('close')
const HeadPhone = createComponent('headphone')

class Icon extends Component {
	static defaultProps = {
		classPrefixer:'icon'
	}
	constructor(props){
		super(props)
		this.state = {
			loading:(<Loading {...props} />),
			ellipsis:(<Ellipsis {...props} />),
			search:(<Search {...props} />),
			play:(<Play {...props} />),
			pause:(<Pause {...props} />),
			next:(<Next {...props} />),
			prev:(<Prev {...props} />),
			'arrow-left':(<ArrowLeft {...props} />),
			'arrow-right':(<ArrowRight {...props} />),
			'arrow-up':(<ArrowUp {...props} />),
			'arrow-down':(<ArrowDown {...props} />),
			'clock':(<Clock {...props} />),
			'close':(<Close {...props} />),
			'headphone':(<HeadPhone {...props} />),
		}
	}
	render(){
		return this.state[this.props.type] || null
	}
}

Icon.propTypes = {
	type:PropTypes.string.isRequired,
	className:PropTypes.string,
	style:PropTypes.object
}

export default Icon