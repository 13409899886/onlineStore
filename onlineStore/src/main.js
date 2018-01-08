// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import HelloWorld from './components/HelloWorld'

import Vuex from "vuex"
Vue.use(Vuex)

import VueRouter from "vue-router"
Vue.use(VueRouter)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<HelloWorld/>',
  components: { HelloWorld }
})
