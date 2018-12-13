import React from 'react'
import Loadable from 'react-loadable'
import ToastLoading from '../components/toast/loading'

const Newlist = Loadable({
	loader:() => import ('../pages/newlist'),
	loading:() => (<ToastLoading />)
})
const Toplist = Loadable({
	loader:() => import ('../pages/toplist'),
	loading:() => (<ToastLoading />)
})
const Plist = Loadable({
	loader:() => import ('../pages/plist'),
	loading:() => (<ToastLoading />)
})
const SingerClasslist = Loadable({
	loader:() => import ('../pages/singer-classlist'),
	loading:() => (<ToastLoading />)
})
const Search = Loadable({
	loader:() => import ('../pages/search'),
	loading:() => (<ToastLoading />)
})

const App = Loadable({
	loader:() => import ('../pages/app'),
	loading:() => (<ToastLoading  />)
})

const Test = () => (<div></div>)

export default [{
	path:'/',
	redirect:'/newlist',
	exact:true
},{
	path:'/test',
	exact:true,
	component:Test
},{
	path:'/search',
	exact:true,
	component:Search
},{
	path:'/',
	component:App,
	routes:[{
		path:'/newlist',
		component:Newlist
	},{
		path:'/toplist',
		component:Toplist
	},{
		path:'/plist',
		component:Plist
	},{
		path:'/singer-classlist',
		component:SingerClasslist
	}]
}]	