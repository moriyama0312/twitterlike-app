<template>
	<div class="c-timeLine__item">
		<router-link
			:to="{name: 'tweet-item-detail', params: {userId: item.user_id, tweetId: item.tweet_id}}"
			class="item__inner"
		>
			<div class="item__icon">
				<router-link :to="{path: '/'}"></router-link>
			</div>
			<div class="item__contents">
				<div class="item__contents__header">
					<span class="header__name">{{ item.name }}</span>
					<span class="header__id">@{{ item.user_id }}</span>
					<span class="header__time">・{{ item.tweet_time }}</span>
				</div>
				<div
					v-if="item.target_tweet_id"
					class="item__reply-to"
				>
					返信先: {{}}さん
				</div>
				<div class="item__contents__main">
					<span class="main__text">{{ item.txt }}</span>
					<span class="main__img"></span>
				</div>
				<div class="item__contents__footer">
					<div class="footer__inner">
						<TweetActionList
							:item="item"
						/>
					</div>
				</div>
			</div>
		</router-link>
	</div>
</template>
<script>
import TweetActionList from '@/components/organisms/TweetActionList.vue'
export default {
	props: ['item'],
	components: {
		TweetActionList
	}
}
</script>