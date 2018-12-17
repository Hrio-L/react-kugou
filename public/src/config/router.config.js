import React from 'react'
import Loadable from 'react-loadable'
import ToastLoading from '../components/toast/loading'
import Icon from '../components/icon'
import SearchHistory from '../pages/search/history'
import Newlist from '../pages/newlist'
import Toplist from '../pages/toplist'
import Plist from '../pages/plist'
import SingerClasslist from '../pages/singer-classlist'


const Search = Loadable({
	loader:() => import ('../pages/search'),
	loading:() => (<ToastLoading />)
})
const SongsView = Loadable({
	loader:() => import ('../pages/rank'),
	loading:() => (<ToastLoading />)
})
const App = Loadable({
	loader:() => import ('../pages/app'),
	loading:() => (<ToastLoading  />)
})

const Test = () => (<div></div>)

export default [{
	path:'/',
	redirect:'/basic/newlist',
	exact:true
},{
	path:'/basic/',
	component:App,
	strict:true,
	routes:[{
		path:'/basic/newlist',
		component:Newlist
	},{
		path:'/basic/toplist',
		component:Toplist
	},{
		path:'/basic/plist',
		component:Plist
	},{
		path:'/basic/singer-classlist',
		component:SingerClasslist
	}]
},{
	path:'/search',
	component:Search,
	routes:[{
		path:'/search',
		exact:true,
		component:SearchHistory
	}]
},{
	path:'/rank/:id',
	component:SongsView,
},{
	path:'/test',
	component:Test
},{
	path:'',
	component:(() => (<h1>404</h1>))
}]	