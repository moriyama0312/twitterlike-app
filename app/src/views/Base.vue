<template>
	<div id="loggin-page">
		<SideHeader
			@modal-open="modalOpen"
		/>
		<router-view 
			v-if="!isLoading"
			:tweetArray="this.getTweet"
		/>
		<SubContents />
		<Modal
			v-if="isOpen"
			@modal-close="modalClose"
		/>
	</div>
</template>

<script>
import SideHeader from '@/components/organisms/SideHeader.vue'
import SubContents from '@/components/organisms/SubContents.vue'
import Modal from '@/components/organisms/Modal.vue'
export default {
	data() {
		return {
			isLoading: true,
			isOpen: false
		}
	},
	components: {
		SideHeader,
		SubContents,
		Modal
	},
	async created() {
		const token = localStorage.token
		await this.$store.dispatch('Login/login', {token})
		await this.$store.dispatch('Profile/getProfile', {token})
		await this.$store.dispatch('Tweet/getTweet', {token})
		this.isLoading = !this.isLoading
	},
	computed: {
		getTweet() {
			return this.$store.getters['Tweet/sortTweet']('tweet', 1)
		}
	},
	methods: {
		modalOpen() {
			this.isOpen = true
		},
		modalClose() {
			this.isOpen = false
		}
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
