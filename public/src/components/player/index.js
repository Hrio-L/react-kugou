import React,{Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Silder from '../silder'
import Icon from '../icon'
import './index.less'

class Player extends Component {
	static defaultProps = {
		classPrefixer:'player'
	}
	render (){
		const {classPrefixer,className} = this.props
		const classes = classNames(classPrefixer,className)
		return (
			<div className={classes}>
				<div className={`${classPrefixer}-avatar`}>
					<img src="http://imge.kugou.com/soft/collection/100/20181207/20181207094420396775.jpg" alt=""/>
				</div>
				<div className={`${classPrefixer}-main`}>
					<Silder />
					<div className={`${classPrefixer}-info`}>
						<div className={`${classPrefixer}-song`}>
							<h5 className={`${classPrefixer}-song-name`}>Let You Go</h5>
							<span className={`${classPrefixer}-song-desc`}>Ayo97</span>
						</div>
						<div className={`${classPrefixer}-actions`}>
							<Icon type="prev" />
							<Icon type="play" />
							<Icon type="next" />
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Player