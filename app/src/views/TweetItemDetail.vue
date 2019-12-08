<template>
	<div id="p-tweet-detail">
		<HomeContentsHeader />
		<TweetItemDetail
			:userId="userId"
			:tweetId="tweetId"
		/>
	</div>
</template>
<script>
import HomeContentsHeader from '@/components/molecules/HomeContentsHeader.vue'
import TweetItemDetail from '@/components/organisms/TweetItemDetail'
export default {
	props: ['userId', 'tweetId'],
	components: {
		HomeContentsHeader,
		TweetItemDetail
	}
}
</script>