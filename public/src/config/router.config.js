import React from 'react'
import Loadable from 'react-loadable'
import ToastLoading from '../components/toast/loading'
import Icon from '../components/icon'
import SearchHistory from '../pages/search/history'
import Newlist from '../pages/newlist'
import Toplist from '../pages/toplist'
import Plist from '../pages/plist'
import SingerClasslist from '../pages/singer-classlist'
import Collapse from '../components/collapse'

const Search = Loadable({
	loader:() => import ('../pages/search'),
	loading:() => (<ToastLoading />)
})
const Rank = Loadable({
	loader:() => import ('../pages/toplist/rank'),
	loading:() => (<ToastLoading />)
})
const PlistDetail = Loadable({
	loader:() => import ('../pages/plist/detail'),
	loading:() => (<ToastLoading />)
})
const SingerList = Loadable({
	loader:() => import ('../pages/singer-classlist/singers'),
	loading:() => (<ToastLoading />)
})
const SingerSongsList = Loadable({
	loader:() => import ('../pages/singer-classlist/songs'),
	loading:() => (<ToastLoading />)
})
const App = Loadable({
	loader:() => import ('../pages/app'),
	loading:() => (<ToastLoading  />)
})

const Test = () => (
	<div>
		
	</div>
)

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
	component:Rank,
},{
	path:'/plist/:id',
	component:PlistDetail,
},{
	path:'/singerclass/:id',
	component:SingerList,
},{
	path:'/singer/:id',
	component:SingerSongsList,
},{
	path:'/test',
	component:Test
},{
	path:'',
	component:(() => (<h1>404</h1>))
}]	