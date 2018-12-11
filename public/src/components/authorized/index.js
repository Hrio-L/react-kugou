import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {HashRouter as Router,Route,Redirect,Switch} from 'react-router-dom'

const Authorized = props => {
	const {routes} = props
	const renderRoute = routes => {
		const RouteWithSubRoutes = route => (
			<Route exact={route.exact} strict={route.strict} path={route.path} render={props => (
				route.redirect ? <Redirect from={route.from} to={route.redirect} /> : <route.component {...props} routes={route.routes} />
			)} />
		)
		return routes.map((d,i) => (
			<RouteWithSubRoutes key={i} {...d} />
		))
	}
	return (
		<Router>
			<Switch>
				{renderRoute(routes)}
			</Switch>
		</Router>
	)
}

Authorized.propTypes = {
	routes:PropTypes.array.isRequired
}

export default Authorized