// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import Index from "./pages/index"
import Slide from "./components/slide"
import Login from "./components/login"
import Detail from "./pages/detail"
import Detail0 from "./pages/detail/detail"
import Detail1 from "./pages/detail/detail1"
import Detail2 from "./pages/detail/detail2"
import Vuex from "vuex"
Vue.use(Vuex)

import VueRouter from "vue-router"
Vue.use(VueRouter)

import VueResource from "vue-resource"
Vue.use(VueResource)
//Vue.config.productionTip = false
let router=new VueRouter({
	mode:"history",
	routes:[
		{
			path:"/",
			component:Index
		},
		{
			path:"/slide",
			component:Slide
		},
		{
			path:"/index",
			component:Index
		},
		{
			path:"/detail",
			component:Detail,
			children:[
				{
					path:"detail0",
					component:Detail0
				},
				{
					path:"detail1",
					component:Detail1
				},
				{
					path:"detail2",
					component:Detail2
				}
			]
		}
	]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	template: '<Layout/>',
  components: { Layout }
})
