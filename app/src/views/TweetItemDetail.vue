<template>
	<div id="p-tweet-detail">
		<HomeContentsHeader />
		<TweetItemDetail
			:userId="userId"
			:tweetId="tweetId"
		/>
		<TimeLineItem
			v-for="reply in replyInfo.replyList"
			:key="reply.tweet_id"
			:item="reply"
			:userList="replyInfo.userList"
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
			replyInfo: {}
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
		await this.$store.dispatch('Tweet/getReply', {token, tweetId: this.tweetId})
		this.replyInfo = this.$store.getters['Tweet/sortReply']
	}
}
</script>