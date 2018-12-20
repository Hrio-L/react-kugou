import React,{Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Silder from '../silder'
import Audio from '../audio'
import Icon from '../icon'
import './index.less'

class Player extends Component {
	static defaultProps = {
		classPrefixer:'player'
	}
	render (){
		const {classPrefixer,className,music,name,lyrics,img,timeLen,author} = this.props
		const classes = classNames(classPrefixer,className)
		return music ? (
			<div className={classes}>	
				<Audio src={music} />
				<div className={`${classPrefixer}-avatar`}>
					<img src={img} alt=""/>
				</div>
				<div className={`${classPrefixer}-main`}>
					<Silder />
					<div className={`${classPrefixer}-info`}>
						<div className={`${classPrefixer}-song`}>
							<h5 className={`${classPrefixer}-song-name`}>{name}</h5>
							<span className={`${classPrefixer}-song-desc`}>{author}</span>
						</div>
						<div className={`${classPrefixer}-actions`}>
							<Icon type="play" />
							<Icon type="next" />
						</div>
					</div>
				</div>
			</div>
		):null
	}
}
export default Player