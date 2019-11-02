<template>
	<div class="c-timeLine">
		<div class="c-timeLine__inner">
			<TimeLineItem
				v-for="tweet in tweets"
				:key="tweet.id"
				:tweet="tweet"
			/>
		</div>
	</div>
</template>
<script>
import TimeLineItem from '@/components/organisms/TimeLineItem.vue'
export default {
	data() {
		return {
			tweets: [
				{
					id: "0",
					accountInfo: {
						id: "test",
						name: "テスト",
						key: false
					},
					date: 20191102-175223,
					contents: {
						text: "テストテストテストテスト",
						img: ""
					},
					actions: {
						rep: 0,
						ret: 0,
						fav: 0
					}
				}
			]
		}
	},
	components: {
		TimeLineItem
	}
	
}
</script>