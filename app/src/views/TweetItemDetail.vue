<template>
	<div id="p-tweet-detail">
		<HomeContentsHeader />
		<TweetItemDetail
			:userId="userId"
			:tweetId="tweetId"
		/>
		<TimeLineItem
			v-for="reply in replys"
			:key="reply.tweet_id"
			:item="reply"
		/>
	</div>
</template>
<script>
import HomeContentsHeader from '@/components/molecules/HomeContentsHeader.vue'
import TweetItemDetail from '@/components/organisms/TweetItemDetail'
import TimeLineItem from '@/components/organisms/TimeLineItem'
export default {
	data() {
		return {
			replys: []
		}
	},
	props: ['userId', 'tweetId'],
	components: {
		HomeContentsHeader,
		TweetItemDetail,
		TimeLineItem
	},
	async created() {
		const token = localStorage.token
		this.replys = await this.$store.dispatch('Tweet/getReply', {token, tweetId: this.tweetId})
	}
}
</script>