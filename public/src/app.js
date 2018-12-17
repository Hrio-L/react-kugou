import React,{Component} from 'react'
import {render} from 'react-dom'
import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux'
import rootReducer from './reducers/index.js'
import rootSaga from './sagas/index.js'
import Authorized from './components/authorized'
import routerConfig from './config/router.config.js'
import 'normalize.css'
import './base.less'


const sagaMiddleware = createSagaMiddleware(rootSaga)
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)


render(
	<Provider store={store}>
		<Authorized routes={routerConfig} />
	</Provider>,
	document.querySelector('.root')
)