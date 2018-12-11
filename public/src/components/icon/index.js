import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './index.less'
class Icon extends Component {
	componentDidMount = () => {

	}
	state = {
		loading:(
			<i style={{color:'white'}} {...this.props} className="icon-loading"></i>
		),
		ellipsis:(
			<i {...this.props} className="icon-ellipsis"></i>
		),
		'arrow-right':(
			<i {...this.props} className="icon-arraw-right"></i>
		)
	}
	render(){
		return this.state[this.props.type] || null
	}
}

Icon.propTypes = {
	type:PropTypes.string.isRequired
}

export default Icon