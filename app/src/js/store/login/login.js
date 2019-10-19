import loginFuncs from './methods.js'

export default {
    namespaced: true,
    state: {

    },
    mutations: {

    },
    getters: {

    },
    actions: {
        login: (ctx, userInfo) => {
			if(userInfo.token === '') {
				console.log("hogehoge")
				console.log(userInfo)
				return loginFuncs.getToken(userInfo)
					.then((res) => {
						console.log(res)
						localStorage.token = res
						ctx.dispatch('login', { token: res })
					})
			}else {
				return loginFuncs.getUserId(userInfo.token)
					.then((res) => {
						console.log(res)
						ctx.commit('onLogin', res, { root: true })
					})
			}
        }
    }
}