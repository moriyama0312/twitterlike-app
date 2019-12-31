<template>
	<div class="c-modal">
		<div class="c-modal__inner">
			<div class="c-modal__contents">
				<div class="c-modal__contents__close">
					<span
						@click="modalClose"
					>×</span>
				</div>
				<HomeContentsTweetBox
					:onTweet="onTweet"
				/>
			</div>
		</div>
		<div class="c-modal__layer" />
	</div>
</template>
<script>
import HomeContentsTweetBox from '@/components/organisms/HomeContentsTweetBox.vue'
export default {
	data() {
		return {

		}
	},
	components: {
		HomeContentsTweetBox
	},
	methods: {
		modalClose() {
			this.$emit('modal-close')
		},
		onTweet(contents) {
			this.$store.dispatch('Tweet/tweet', contents)
			this.modalClose()
		}
	}
}
</script>