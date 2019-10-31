<template>
	<div class="c-tweet">
		<div class="c-tweet__inner">
			<div class="c-tweet__icon">
				<router-link :to="{name: 'profile'}"></router-link>
			</div>
			<div class="c-tweet__contents">
				<form>
					<TextArea
						placeholder="いまどうしてる？"
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
	components: {
		TextArea,
		TweetFooter
	}
}
</script>