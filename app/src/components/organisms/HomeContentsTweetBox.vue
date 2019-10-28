<template>
	<div class="c-tweet">
		<div class="c-tweet__inner">
			<div class="c-tweet__icon">
				<span></span>
			</div>
			<div class="c-tweet__contents">
				<form>
					<TextArea />
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