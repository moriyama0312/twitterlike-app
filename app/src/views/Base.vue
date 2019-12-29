<template>
	<div id="loggin-page">
		<SideHeader />
		<router-view 
			v-if="!isLoading"
		/>
		<SubContents />
	</div>
</template>

<script>
import SideHeader from '@/components/organisms/SideHeader.vue'
import SubContents from '@/components/organisms/SubContents.vue'
export default {
	data() {
		return {
			isLoading: true
		}
	},
	components: {
		SideHeader,
		SubContents
	},
	async created() {
		const token = localStorage.token
		await this.$store.dispatch('Login/login', {token})
		console.log('finish login')
		await this.$store.dispatch('Profile/getProfile', {token})
		console.log('finish profile')
		await this.$store.dispatch('Tweet/getTweet', {token})
		console.log('gettweet')
		this.isLoading = !this.isLoading
		console.log('created')
		console.log(this.$store.state.Tweet.tweet)
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
