<template>
	<div class="c-tweet">
		<div class="c-tweet__inner">
			<div class="c-tweet__icon">
				<router-link :to="{name: 'profile'}"></router-link>
			</div>
			<div class="c-tweet__contents">
				<form @submit.prevent="Tweet">
					<TextArea
						placeholder="いまどうしてる？"
						v-model="textValue"
					/>
					<TweetFooter />
				</form>
			</div>
		</div>
	</div>
</template>
<script>
import TextArea from '@/components/molecules/TextArea.vue'
import TweetFooter from '@/components/organisms/TweetFooter.vue'
export default {
	data() {
		return {
			textValue: '',
			tweetTime: ''
		}
	},
	props: {
		onTweet: {
			require: true,
			type: Function
		}
	},
	components: {
		TextArea,
		TweetFooter
	},
	methods: {
		Tweet() {
			setTimeNow()
			let contents = {
				text: this.textValue,
				images: {
					img01: null,
					img02: null,
					img03: null,
					img04: null
				},
				tweet_time: this.tweetTime
			}
			console.log(contents)
			this.onTweet(contents)
			this.textValue = ''
		},
		setTimeNow() {
			let date = new Date()
			let year = date.getFullYear()
			let month = shapeData(Number(date.getMonth())+1)
			let day = shapeData(Number(date.getDate()))
			let hour = shapeData(Number(date.getHours()))
			let min = shapeData(Number(date.getMinutes()))
			let sec = shapeData(Number(date.getSeconds()))
			this.tweetTime = `${year} + '-' + ${month} + '-' + ${day} + ' ' + ${hour} + ':' + ${min} + ':' + ${sec}`
		},
		shapeData(data) {
			if(data < 10) {
				
			}
		}
	}
}
</script>