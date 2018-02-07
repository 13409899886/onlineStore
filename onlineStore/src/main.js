// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import Index from "./pages/index"
import Slide from "./components/slide"

import Vuex from "vuex"
Vue.use(Vuex)

import VueRouter from "vue-router"
Vue.use(VueRouter)

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
