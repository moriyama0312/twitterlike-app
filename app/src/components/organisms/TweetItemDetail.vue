<template>
	<div class="tweet-item-detail">
		<div class="tweet-item-detail__inner">
			<div class="detail__header">
				<div class="detail__header__icon">
					<router-link :to="{path: '/'}"></router-link>
				</div>
				<div class="detail__header__account">
					<span class="account__name"></span>
					<span class="account__id"></span>
				</div>
			</div>
			<div class="detail__main">
				<span class="detail__main__text"></span>
				<span class="detail__main__img"></span>
			</div>
			<div class="detail__time">
				<span class="time"></span>
			</div>
			<div class="detail__favorite">
				<span class="favorite">件の</span>いいね
			</div>
			<div class="detail__footer">
				<div class="detail__footer__inner">
					<TweetActionList
						:detail="detail"
					/>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import TweetActionList from '@/components/organisms/TweetActionList.vue'
export default {
	data() {
		return {
			// detail: this.setTweetDetailInfo
			detail: []
		}
	},
	props: ['userId', 'tweetId'],
	components: {
		TweetActionList
	},
	mounted() {
		this.$nextTick(() => {
			console.log('mount')
			this.detail = this.$store.getters['Tweet/pickTweet'](this.tweetId)
		})
		// this.detail = this.$store.getters['Tweet/pickTweet'](this.tweetId)
	},
	computed: {
		setTweetDetailInfo() {
			return this.$store.getters['Tweet/pickTweet'](this.tweetId)
		}
	}
}
</script>