import Vue from 'vue'
import Vuex from 'vuex'
import Login from './login/login'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		Login
	},
	state: {
		isLogin: false,
		userInfo: {

		}
	},
	mutations: {
		onLogin: (state, data) => {
			state.isLogin = true
			state.userInfo = data
		}
	}
})
