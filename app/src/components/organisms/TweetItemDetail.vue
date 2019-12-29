<template>
	<div class="tweet-item-detail">
		<div class="tweet-item-detail__inner">
			<div class="detail__header">
				<div class="detail__header__icon">
					<router-link :to="{path: '/'}"></router-link>
				</div>
				<div class="detail__header__account">
					<span class="account__name">{{ detail.name }}</span>
					<span class="account__id">{{ detail.user_id }}</span>
				</div>
			</div>
			<div class="detail__main">
				<span class="detail__main__text">{{ detail.txt }}</span>
				<span class="detail__main__img"></span>
			</div>
			<div class="detail__time">
				<span class="time">{{ detail.tweet_time }}</span>
			</div>
			<ul
				v-if="!(detail.retweet_num === 0 && detail.favorite_num === 0)"
				class="detail__reaction"
			>
				<li
					v-if="!(detail.retweet_num === 0)"
				>
					<span class="retweet">件の</span>リツイート
				</li>
				<li
					v-if="!(detail.favorite_num === 0)"
				>
					<span class="favorite">件の</span>いいね
				</li>
			</ul>
			<div class="detail__footer">
				<div class="detail__footer__inner">
					<TweetActionList
						:item="detail"
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
			detail: []
		}
	},
	props: ['userId', 'tweetId'],
	components: {
		TweetActionList
	},
	created() {
		this.detail = this.$store.getters['Tweet/pickTweet'](this.tweetId)
	}
}
</script>