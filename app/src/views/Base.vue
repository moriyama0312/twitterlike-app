<template>
	<div id="loggin-page">
		<SideHeader />
		<router-view />
		<SubContents />
	</div>
</template>

<script>
import SideHeader from '@/components/organisms/SideHeader.vue'
import SubContents from '@/components/organisms/SubContents.vue'
export default {
	components: {
		SideHeader,
		SubContents
	},
	created() {
		const token = localStorage.token
		this.$store.dispatch('Login/login', {token})
		this.$store.dispatch('Profile/getProfile', {token})
		// this.$store.dispatch('Tweet/get', {token})
	},
	beforeRouteEnter: (to, from, next) => {
		if(!localStorage.token) {
			next('/')
		}else {
			next()
		}
	}
}
</script>
