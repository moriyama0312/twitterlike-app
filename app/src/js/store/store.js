import Vue from 'vue'
import Vuex from 'vuex'
import Login from './login/login'
import Profile from './profile/profile'
import Tweet from './tweet/tweet'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		Login,
		Profile,
		Tweet
	},
	state: {
		isLogin: false,
		userInfo: {

		}
	},
	mutations: {
		onLogin: (state, data) => {
			state.isLogin = true
		},
		setProfile: (state, data) => {
			state.userInfo = data
		}
	}
})
