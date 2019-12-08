import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/views/Top.vue'
import Base from '@/views/Base.vue'
import Home from '@/views/Home.vue'
import TweetItemDetail from '@/views/TweetItemDetail'

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
			component: Base,
			children: [
				{
					path: '',
					name: 'home',
					component: Home
				},
				{
					path: '/:userId/status/:tweetId',
					name: 'tweet-item-detail',
					component: TweetItemDetail
				}
			]
		}
	]
})
