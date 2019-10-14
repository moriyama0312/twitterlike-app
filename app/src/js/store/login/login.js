import {
	getToken,
	getUserId
} from './methods.js'

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
				return getToken(userInfo)
					.then((res) => {
						ctx.login({ token: res })
					})
			}else {
				return getUserId(userInfo.token)
					.then((res) => {
						ctx.commit('onLogin', res, { root: true })
					})
			}
        }
    }
}