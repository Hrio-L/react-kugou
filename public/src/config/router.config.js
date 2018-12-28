import React from 'react'
import Loadable from 'react-loadable'
import ToastLoading from '../components/toast/loading'
import Icon from '../components/icon'
import SearchHistory from '../pages/search/history'
import SearchResult from '../pages/search/result'
import Newlist from '../pages/newlist'
import Toplist from '../pages/toplist'
import Plist from '../pages/plist'
import SingerClasslist from '../pages/singer-classlist'

import Lyrics from '../components/lyrics'

const Search = Loadable({
	loader:() => import ('../pages/search'),
	loading:() => (<ToastLoading style={{color:'white'}} />)
})
const Rank = Loadable({
	loader:() => import ('../pages/toplist/rank'),
	loading:() => (<ToastLoading style={{color:'white'}} />)
})
const PlistDetail = Loadable({
	loader:() => import ('../pages/plist/detail'),
	loading:() => (<ToastLoading style={{color:'white'}} />)
})
const SingerList = Loadable({
	loader:() => import ('../pages/singer-classlist/singers'),
	loading:() => (<ToastLoading style={{color:'white'}} />)
})
const SingerSongsList = Loadable({
	loader:() => import ('../pages/singer-classlist/songs'),
	loading:() => (<ToastLoading style={{color:'white'}} />)
})
const Main = Loadable({
	loader:() => import ('../pages/main'),
	loading:() => (<ToastLoading style={{color:'white'}}  />)
})

	

const Test = () => (
	<div className="test">
	</div>
)

export default [{
	path:'/',
	redirect:'/basic/newlist',
	exact:true
},{
	path:'/basic/',
	component:Main,
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
	},{
		path:'/search/:keyword',
		component:SearchResult
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
	component:SingerSongsList
},{
	path:'/test',
	component:Test
},{
	path:'',
	component:(() => (<h1>404</h1>))
}]	