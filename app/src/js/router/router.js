import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/views/Top.vue'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'top',
			component: Top
		},
		{
			path: '/home',
			name: 'home',
			component: Home
		}
	]
})
