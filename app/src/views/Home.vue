<template>
	<div id="p-home">
		<div id="p-home__contents">
			<HomeContentsHeader />
			<HomeContentsTweetBox 
				:onTweet="onTweet"
			/>
			<HomeContentsTimeLine />
		</div>
	</div>
</template>
<script>
import HomeContentsHeader from '@/components/molecules/HomeContentsHeader.vue'
import HomeContentsTweetBox from '@/components/organisms/HomeContentsTweetBox.vue'
import HomeContentsTimeLine from '@/components/organisms/HomeContentsTimeLine.vue'

export default {
	components: {
		HomeContentsHeader,
		HomeContentsTweetBox,
		HomeContentsTimeLine
	},
	methods: {
		onTweet() {
			
		}
	}
}
</script>