<template>
	<div class="c-timeLine__item">
		<div class="item__inner">
			<div class="item__icon">
				<router-link :to="{path: '/'}"></router-link>
			</div>
			<div class="item__contents">
				<div class="item__contents__header">
					<span class="header__name">{{ tweet.accountInfo.name }}</span>
					<span class="header__id">@{{ tweet.accountInfo.id }}</span>
					<span class="header__time">・</span>
				</div>
				<div class="item__contents__main">
					<span class="main__text">{{ tweet.contents.text }}</span>
					<span class="main__img">{{ tweet.contents.img }}</span>
				</div>
				<div class="item__contents__footer">
					<div class="footer__inner">
						<TweetActionList
							:tweet="tweet"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import TweetActionList from '@/components/organisms/TweetActionList.vue'
export default {
	props: ['tweet'],
	components: {
		TweetActionList
	}
}
</script>