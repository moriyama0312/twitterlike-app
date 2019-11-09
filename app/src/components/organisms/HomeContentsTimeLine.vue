<template>
	<div class="c-timeLine">
		<div class="c-timeLine__inner">
			<TimeLineItem
				v-for="item in tweet"
				:key="item.tweet_id"
				:item="item"
			/>
		</div>
	</div>
</template>
<script>
import TimeLineItem from '@/components/organisms/TimeLineItem.vue'
export default {
	props: {
		tweet: {
			type: Array
		}
	},
	components: {
		TimeLineItem
	}
	
}
</script>