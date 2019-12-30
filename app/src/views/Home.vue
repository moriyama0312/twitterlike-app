<template>
	<div id="p-home">
		<div id="p-home__contents">
			<HomeContentsHeader />
			<HomeContentsTweetBox 
				:onTweet="onTweet"
			/>
			<HomeContentsTimeLine 
				:tweet="tweetArray"
			/>
		</div>
	</div>
</template>
<script>
import HomeContentsHeader from '@/components/molecules/HomeContentsHeader.vue'
import HomeContentsTweetBox from '@/components/organisms/HomeContentsTweetBox.vue'
import HomeContentsTimeLine from '@/components/organisms/HomeContentsTimeLine.vue'

export default {
	props: ['tweetArray'],
	components: {
		HomeContentsHeader,
		HomeContentsTweetBox,
		HomeContentsTimeLine
	},
	methods: {
		onTweet(contents) {
			this.$store.dispatch('Tweet/tweet', contents)
		}
	}
}
</script>