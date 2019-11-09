<template>
	<div id="p-home">
		<div id="p-home__contents">
			<HomeContentsHeader />
			<HomeContentsTweetBox 
				:onTweet="onTweet"
			/>
			<HomeContentsTimeLine 
				:tweet="tweet"
			/>
		</div>
	</div>
</template>
<script>
import HomeContentsHeader from '@/components/molecules/HomeContentsHeader.vue'
import HomeContentsTweetBox from '@/components/organisms/HomeContentsTweetBox.vue'
import HomeContentsTimeLine from '@/components/organisms/HomeContentsTimeLine.vue'

export default {
	data() {
		return {
			tweet: []
		}
	},
	components: {
		HomeContentsHeader,
		HomeContentsTweetBox,
		HomeContentsTimeLine
	},
	methods: {
		onTweet(contents) {
			this.$store.dispatch('tweet/tweet', contents)
		}
	},
	computed: {
		getTweet() {
			this.tweet = this.$store.state.Tweet.tweet
		}
	}
}
</script>