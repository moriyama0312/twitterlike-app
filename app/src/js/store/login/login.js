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
				return loginFuncs.getToken(userInfo)
					.then((res) => {
						ctx.dispatch('login', { token: res })
					})
			}else {
				return loginFuncs.getUserId(userInfo.token)
					.then((res) => {
						ctx.commit('onLogin', res, { root: true })
					})
			}
        }
    }
}