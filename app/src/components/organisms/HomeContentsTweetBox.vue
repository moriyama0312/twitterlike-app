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
			this.setTimeNow()
			let contents = {
				text: this.textValue,
				images: {
					img01: null,
					img02: null,
					img03: null,
					img04: null
				},
				tweetTime: this.tweetTime,
				replyNum: 0,
				retweetNum: 0,
				favoriteNum: 0
			}
			console.log(contents)
			this.onTweet(contents)
			this.textValue = ''
			this.tweetTime = ''
		},
		setTimeNow() {
			let date = new Date()
			let year = date.getFullYear()
			let month = this.shapeData(Number(date.getMonth())+1)
			let day = this.shapeData(Number(date.getDate()))
			let hour = this.shapeData(Number(date.getHours()))
			let min = this.shapeData(Number(date.getMinutes()))
			let sec = this.shapeData(Number(date.getSeconds()))
			this.tweetTime = year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec
		},
		shapeData(data) {
			let strData = ''
			if(data < 10) {
				strData = '0' + String(data)
			}else {
				strData = String(data)
			}
			return strData
		}
	}
}
</script>